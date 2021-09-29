import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService extends BaseService{

  noticias(){
    try {
      this.setEndPoint('noticias')
      return this.get()
    } catch (error) {
      throw error
    }
  }

  noticia(id){
    try {
      this.setEndPoint('noticias')
      return this.getNoticia(id)
    } catch (error) {
      throw error
    }
  }

  postNoticia(obj){
    try {
      this.setEndPoint('admin/noticias')
      return this.post(obj)
    } catch (error) {
      throw error
    }
  }
  
  updateNoticia(id, obj){
    try {
      this.setEndPoint('admin/noticias')
      return this.update(id, obj)
    } catch (error) {
      throw error
    }
  }
}
