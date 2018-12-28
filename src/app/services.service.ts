import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url: string = 'http://127.0.0.1:3000/usuarios';
  //private url: string = 'https://my-json-server.typicode.com/jhonatan2276/testejson/usuarios';
  usurioId: any;
  usuarioAutenticado: boolean = false;
  resposta: any;

  constructor(private http: HttpClient, private alertController: AlertController) { }

  async alertaSimples(titulo, subtitulo, informacao) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: informacao,
      buttons: ['OK']
    });

    await alert.present();
  }

  getUsuarios() {
    return this.http.get(this.url)
  }

  getUsuariosDetalhe(id) {
    return this.http.get(`${this.url}/${id}`)
  }

  registraLogin(nome: string){
    //this.http.post("http://127.0.0.1:3000/logou", {
    this.http.post("https://my-json-server.typicode.com/jhonatan2276/testejson/logou", {
      nome: nome,
      hora: new Date()
    })
    .subscribe(data => {this.resposta = data});
  }
}