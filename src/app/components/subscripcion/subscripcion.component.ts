import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscripcion',
  templateUrl: './subscripcion.component.html',
  styleUrls: ['./subscripcion.component.css']
})
export class SubscripcionComponent implements OnInit {
  form: FormGroup
  isLoaded : boolean

  constructor() { }

  ngOnInit(){

  }

  formObj = {
    
  }

}
