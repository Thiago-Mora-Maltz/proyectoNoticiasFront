import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoService extends BaseService{

  async enviar(obj){
    try {
      await this.setEndPoint('contacto')
      return this.enviarMensaje(obj)
    } catch (error) {
      throw error
    }
  }  
}

