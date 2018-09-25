import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url: string = 'http://127.0.0.1:3000/usuarios';
  //private url: string = 'https://my-json-server.typicode.com/jhonatan2276/testejson/usuarios';
  usurioId: any;
  usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.url)
  }

  getUsuariosDetalhe(id) {
    return this.http.get(`${this.url}/${id}`)
  }
}
