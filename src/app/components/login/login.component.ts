import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuariosService } from './../services/usuarios.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isLoaded: any
  obj: any
  error: boolean
  constructor(private service: UsuariosService,
    private router: Router) { 
    
  }

  ngOnInit() {
    this.isLoaded = false
    this.form = new FormGroup({
      mail: new FormControl('', ),
      password: new FormControl('', )
    })
    this.isLoaded = true
  }

  async login(){
    this.obj = {
      mail: this.form.value.mail,
      password: this.form.value.password
    }
    const result = await this.service.ingresar(this.obj)
    if(result){
      let token =  JSON.stringify(result)
      sessionStorage.setItem('auth', token)
      this.router.navigate(['noticias'])
    }else{
      this.error=true
    }
  }
}
