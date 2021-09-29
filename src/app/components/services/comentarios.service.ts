import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService extends BaseService{


traerComentarios(id){
  try {
    this.setEndPoint('comentarios')
    return this.getComentario(id)
  } catch (error) {
    throw error
  }
}
comentar(obj){
  try {
    this.setEndPoint('comentarios')
    return this.postComentario(obj)
  } catch (error) {
    throw error
  }
}
}
