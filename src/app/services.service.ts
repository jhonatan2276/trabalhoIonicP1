import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url: string = 'http://localhost:3000/usuarios';
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
