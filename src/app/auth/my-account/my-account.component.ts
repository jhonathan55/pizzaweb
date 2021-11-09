import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  providers: [AuthService]
})
export class MyAccountComponent implements OnInit {

  private isValidEmail = /\S+@\S+\.\S+/;
  private lengthPassword = 6;
  private lengthCell = 9;

  updateForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder qlue valida con una expresion regular previamente creado
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    cel: ['', [Validators.required,
    Validators.maxLength(this.lengthCell),
    Validators.minLength(this.lengthCell)

    ]
    ],
    //minLength valida la cantidad min de caracteres
    password: ['', [Validators.required, Validators.minLength(this.lengthPassword)]],
    politicas: ['', [Validators.requiredTrue]]
  });



  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
  }
  //metodo de update
  onUpdate() {
    console.log("Hola")
    //   this.authSvc.currentUser.updateProfile({
    //     displayName:this.nombre
    //   });
  }

  isValidField(field: string): string {
    const validatedField = this.updateForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }
}
