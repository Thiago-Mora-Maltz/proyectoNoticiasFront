import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer = environment.url
  endpoint = ''  
  constructor(private http : HttpClient, protected router : Router )
  {  }

   getHttpOptions() {
    let httpOptions = {};
    if(sessionStorage.getItem('auth')){ 
      httpOptions = {
        headers : new HttpHeaders({
          Authorization : `Bearer ${JSON.parse(sessionStorage.getItem('auth'))}`
        })
      }
    }
    console.log(httpOptions)
    return httpOptions;
  }

  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }
  async get(){
    try {
      return this.http
              .get(this.urlServer + this.endpoint)
              .toPromise()
    } catch (error) {
      console.log(error)
      // if (error.status === 401) {
      //   this.procesarRespuestaError();
      // }
    }
  }

  async getNoticia(id){
    try {
      return this.http
        .get(`${this.urlServer}${this.endpoint}/${id}`)
        .toPromise()
    } catch (error) {
      console.log(error)
    }
  }

  async post(obj){
    try {
      const options = this.getHttpOptions()
      return await this.http
          .post(`${this.urlServer}${this.endpoint}`, obj, options)
          .toPromise()
    } catch (error) {
      console.log(error)
    }
  }

  async update(id, obj){
    try {
      const options = this.getHttpOptions()
      return this.http
          .put(`${this.urlServer}${this.endpoint}`,[id, obj], options)
          .toPromise()
    } catch (error) {
      console.log(error)
    }
  }

  async getComentario (id){
    try {
      return this.http
        .get(`${this.urlServer}${this.endpoint}/${id}`).toPromise()
    } catch (error) {
      console.log(error);
      
    }
  }

  async postComentario(obj){
    try {
      const options = this.getHttpOptions()
      return this.http
          .post(`${this.urlServer}${this.endpoint}`, obj, options)
          .toPromise()
    } catch (error) {
      console.log(error)
    }
  }
  
  async enviarMensaje(obj){
    try {
      const options = this.getHttpOptions()
      return this.http
          .post(`${this.urlServer}${this.endpoint}`, obj, options)
          .toPromise()
    } catch (error) {
      console.log(error)
    }
  }

  async login(obj){
    try {
      const options = this.getHttpOptions()
      return this.http
          .post(`${this.urlServer}${this.endpoint}`, obj, options)
          .toPromise()
    } catch (error) {
      console.log(error)
    }
  }
}
    // procesarRespuestaError(){
    //   try {
    //     sessionStorage.clear();
    //     this.router.navigate(["/login"]);
    //     return;
    //   } catch (error) {
    //     throw error;
    //   }
    // }
