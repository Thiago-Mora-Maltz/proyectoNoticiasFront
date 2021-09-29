import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService{

  async ingresar(obj){
    this.setEndPoint('auth')
    return this.login(obj)
  }
}
