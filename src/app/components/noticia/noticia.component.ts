import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/components/services/noticias.service';
import { ComentariosService } from '../services/comentarios.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticia : any
  noticias : any  
  comentarios : any
  id_noticia : any
  form: FormGroup
  obj : any
  data : any
  image : any
  constructor(private activatedRoute: ActivatedRoute,
              private noticiasService : NoticiasService,
              private comentariosService: ComentariosService,
              private service : NoticiasService) {
                this.form = new FormGroup(
                  {comentario: new FormControl("")}
                )
               }


  async ngOnInit() {
    this.noticia = await this.noticiasService.noticia(this.activatedRoute.snapshot.params.id)
    this.id_noticia = this.noticia[0].id_noticia
    this.comentarios = await this.comentariosService.traerComentarios(this.id_noticia)
    this.data = JSON.parse(localStorage.getItem('@@auth0spajs@@::xURER22o7vViNmVwClynTw2osxtX5UsR::default::openid profile email')) 
    this.image = this.data.body.decodedToken.user.picture
    this.noticias = await this.service.noticias()

  }

submit(){
  this.data = JSON.parse(localStorage.getItem('@@auth0spajs@@::xURER22o7vViNmVwClynTw2osxtX5UsR::default::openid profile email')) 
  this.obj = {
    foto_usuario : this.image,
    usuario : this.data.body.decodedToken.user.name,
    id_noticia : this.id_noticia,
    comentario: this.form.value.comentario
  }
  this.comentariosService.comentar(this.obj)
  this.form.reset()
}

}
