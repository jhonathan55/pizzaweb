import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { StoresService } from 'src/app/shared/services/stores.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userI } from 'src/app/auth/interfaces/userI.interface';
import { comunasI, regionesI } from 'src/app/auth/interfaces/regiones.interface';
import { RegionesService } from 'src/app/auth/services/regiones.service';
import { DetailsOrdersI, DetailsProductI, OrdersI } from 'src/app/auth/interfaces/orders.interfce';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { Product } from '../products/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { tap } from 'rxjs/operators';
import { DetailOrderService } from 'src/app/shared/services/detail-order.service';
import Swal from 'sweetalert2';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  //provires AuthService
  providers: [AuthService]
})
export class CheckoutComponent implements OnInit {


  //paypalconfig
  public payPalConfig?: IPayPalConfig;
  //cart Item productosComprados
  cart: Product[] = [];
  detail: DetailsProductI[] = [];
  //estrae datos de usuario logeado
  public user$: Observable<any> = this.authSvc.afAuth.user;
  //trae la collection de stores desde el servicio
  public stores$ = this.storesSvc.stores;

  //varible que maneja si el envió es por deliveri o no
  isDelivery = false;

  public selectRegion: regionesI = { id: 0, name: "" };

  public regiones: regionesI[] | undefined;
  public comunas: comunasI[] | undefined;

  public fecha: any;
  //form
  private isValidEmail = /\S+@\S+\.\S+/;

  checkoutForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder que valida con una expresion regular previamente creado
    name: ['', [Validators.required]],
    email: [{ value: '' },
    [Validators.required, Validators.pattern(this.isValidEmail)]],
    uidUser: [''],
    region: ['', [Validators.required]],
    comuna: ['', [Validators.required]],
    calle: ['', [Validators.required]],
    num: ['', [Validators.required]],
    dpa: [''],
    sucursal: ['', [Validators.required]],

  });

  constructor(
    private authSvc: AuthService,
    private storesSvc: StoresService,
    private router: Router,
    private fb: FormBuilder,
    private regionesSvc: RegionesService,
    private orderSvc: OrdersService,
    private detailOrder: DetailOrderService,
    private shoppingCartSvc: ShoppingCartService,
  ) {
    //pasa el usuario auth al form
    this.user$.subscribe(user => {
      this.initValueForm(user)
    });
  }

  //incializamos el form y pasamos los datos del auth user
  initValueForm(user: userI): void {
    this.checkoutForm.patchValue({
      uidUser: user.uid,
      name: user.displayName,
      email: user.email,

    });
  }

  ngOnInit(): void {
    //obtengo el array de regiones desde el servicio y lo almaceno en la variable regiones
    this.regiones = this.regionesSvc.getRegion();
    this.getDataCart();
    this.prepareDetail();
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'CLP',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '9.99',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);


      },
      onError: err => {
        console.log('OnError', err);

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      },
    };

  }
  //metodo recibe los parametros del form y los envia al servico
  onSubmit(): void {
    const formValid = this.checkoutForm.valid;
    const orderId = this.checkoutForm.value.id || null;
    const order = this.checkoutForm.value;
    const details: DetailsProductI[] = this.cart;
    const sucursal = this.checkoutForm.value.sucursal;
    const date = this.getCurrentDay();
    if (this.isDelivery) {
      const data: OrdersI = {
        userId: order.uidUser,
        email: order.email,
        name: order.name,
        fecha: date,
        region: order.region,
        comuna: order.comuna,
        calle: order.calle,
        num: order.num,
        dpa: order.dpa,
        details: details,
      }
      //metodo comentado por pruebas Nota** Descomentar para insert de order
      this.orderSvc.onSaveOrder(data, orderId)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por tu compra, tu pedido se esta gestionando',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/home']);

    } else {
      const data: OrdersI = {
        userId: order.uidUser,
        email: order.email,
        name: order.name,
        fecha: date,
        delivery: this.isDelivery,
        sucursalId: order.sucursal,
        details: details,

      }
      //metodo comentado por pruebas Nota** Descomentar para insert de order
      this.orderSvc.onSaveOrder(data, orderId)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por tu compra, tu pedido se esta gestionando',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/home']);
    }


    console.log("===>", details);






  }

  onPickupOrDelivery(value: boolean): void {
    console.log(value);
    this.isDelivery = value;
  }

  //validación de form
  isValidField(field: string): string {
    const validatedField = this.checkoutForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  //metodo que recibe el cambio de evento en el select d regiones y busca por regionID
  onSelect(idRegion: number): void {
    console.log(idRegion)
    this.comunas = this.regionesSvc.getComunas().filter(item => item.regionesId == idRegion);
  }

  //metodo que estrae la fecha actual
  getCurrentDay(): String {
    const date = new Date().toLocaleDateString();
    return date;
  }

  private prepareDetail(): DetailsProductI[] {
    this.detail = [];
    this.cart.forEach(res => {
      console.log(res);

    });
    return this.detail

  }

  private getDataCart(): void {
    this.shoppingCartSvc.cartActions$
      .pipe(
        tap((product: Product[]) => this.cart = product)
      )
      .subscribe();
    console.log(this.cart);

  }

}
