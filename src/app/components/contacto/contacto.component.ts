import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: FormGroup
  obj: any
  constructor(private service: ContactoService) { 
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl("", ),
      mail: new FormControl("", ),
      mensaje: new FormControl("", )
    })
  }

async enviar(){
  this.obj = {
    nombre: this.form.value.nombre,
    mail: this.form.value.mail,
    mensaje: this.form.value.mensaje
  }
  console.log(this.obj)
  await this.service.enviar(this.obj)
  this.form.reset()
}

}
