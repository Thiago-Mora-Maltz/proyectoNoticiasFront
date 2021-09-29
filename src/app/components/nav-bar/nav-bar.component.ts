import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn: boolean
  item: any
  user : any
  vector : any = [
    {titulo : 'Inicio', link: 'noticias'},
    {titulo : 'Suscribite!', link : 'subscripcion'},
    {titulo : 'Contacto', link : 'contacto'}
  ]
  constructor(private router: Router,) {}
  
  ngOnInit() {
    this.item = sessionStorage.getItem('auth')
    if(this.item){
      this.loggedIn = true
    }else{
      console.log(this.item)
      this.loggedIn=false
    }
  //  this.user = JSON.parse(localStorage.getItem('@@auth0spajs@@::xURER22o7vViNmVwClynTw2osxtX5UsR::default::openid profile email'))
    //console.log(this.user.body.decodedToken.user.https://example.com/roles)
  }


  salir(){
    sessionStorage.clear()
    this.ngOnInit()
    this.router.navigate(['noticias'])
  }
}

