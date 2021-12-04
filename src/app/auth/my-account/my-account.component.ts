import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { userI } from '../interfaces/userI.interface';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  providers: [AuthService]
})
export class MyAccountComponent implements OnInit {

  //observador que tiene los datos del usuario auth
  public user$: Observable<any> = this.authSvc.afAuth.user;

  private isValidEmail = /\S+@\S+\.\S+/;
  private lengthPassword = 6;
  private lengthCell = 9;

  updateForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder que valida con una expresion regular previamente creado
    name: ['', [Validators.required]],
    email: [{ value: '', isReadonly: true },
    [Validators.required, Validators.pattern(this.isValidEmail)]],
    uid: [{ value: '', isReadonly: true }, [Validators.required]],

  });


  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder

  ) {
    //pasa el usuario auth al form
    this.user$.subscribe(user => {
      this.initValueForm(user)
    });

  }

  ngOnInit(): void {

  }
  //metodo de update
  onGoToEdit() {
    if (this.updateForm.valid) {
      Swal.fire({
        title: 'Deseas Editar el Nombre?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Editar',

      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Editado!', '', 'success')
          const user = this.updateForm.value;
          const name = this.updateForm.value.name;
          this.authSvc.updateProfile(name, user);
        }
      })

      //this.updateForm.reset();
    }
  }
  //incializamos el form y pasamos los datos del auth user
  initValueForm(user: userI): void {
    this.updateForm.patchValue({
      name: user.displayName,
      email: user.email,
      uid: user.uid
    });
  }

  //validación de form
  isValidField(field: string): string {
    const validatedField = this.updateForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }


}
