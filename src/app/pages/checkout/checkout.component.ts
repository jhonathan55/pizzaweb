import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '../products/interfaces/store.interface';
import { DataService } from '../products/services/data.service';
import { Observable } from 'rxjs';
import { comunasI, regionesI } from 'src/app/auth/interfaces/regiones.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { RegionesService } from 'src/app/auth/services/regiones.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { userI } from 'src/app/auth/interfaces/userI.interface';
import Swal from 'sweetalert2';
import { Product } from '../products/interfaces/product.interface';
import { DetailsProductI, OrdersI } from 'src/app/auth/interfaces/orders.interfce';
import { StoresService } from '../products/services/stores.service';
import { OrdersService } from '../products/services/orders.service';
import { DetailOrderService } from '../products/services/detail-order.service';

import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  // proporciona AuthService

  providers: [AuthService]
})
export class CheckoutComponent implements OnInit {

  //paypalconfig
  public payPalConfig?: IPayPalConfig;

  public total:number=0;


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
    total:['']
  });

  constructor(
    private authSvc: AuthService,
    private storesSvc: StoresService,
    private router: Router,
    private fb: FormBuilder,
    private regionesSvc: RegionesService,
    private orderSvc: OrdersService,
    private shoppingCartSvc: ShoppingCartService,
  ) {

    //pasa el usuario auth al form
    this.user$.subscribe(user => {
      this.initValueForm(user)
    });
  }

  ngOnInit(): void {

    this.regiones = this.regionesSvc.getRegion();
    this.getDataCart();
    this.prepareDetail();
    this.initConfig();

  }

  private initConfig(): void {
  
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.clienteID,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: this.total.toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.total.toString()
              }
            }
          },
          items: this.prepareDetail()
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

      }
    };
  }

  //incializamos el form y pasamos los datos del auth user
  initValueForm(user: userI): void {
    this.checkoutForm.patchValue({
      uidUser: user.uid,
      name: user.displayName,
      email: user.email,
  

    });
  }


  onPickupOrDelivery(value: boolean): void {
    this.isDelivery = value;

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
        total:this.total
      }
      //metodo comentado por pruebas Nota** Descomentar para insert de order
      this.orderSvc.onSaveOrder(data, orderId)
      this.onBuy(orderId);
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
        total:this.total
      }
      //metodo comentado por pruebas Nota** Descomentar para insert de order
      this.orderSvc.onSaveOrder(data, orderId)
      this.onBuy(orderId);
      this.router.navigate(['/home']);
    }
    console.log("===>", details);
  }

  //metodo con numero de orden
  onBuy(numOrd: String) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias por tu compra, tu pedido numero ' + numOrd + 'se esta gestionando!',
      showConfirmButton: false,
      timer: 2500
    })
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
      
      this.total=res.price+this.total;
      
      console.log("resul", res);
    });
    
    
    return this.detail

  }


  private getDataCart(): void {
    this.shoppingCartSvc.cartActions$
      .pipe(
        tap((product: Product[]) => this.cart = product)
      )
      .subscribe();
    console.log("aca", this.cart);

  }




}
