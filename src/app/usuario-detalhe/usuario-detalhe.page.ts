import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.page.html',
  styleUrls: ['./usuario-detalhe.page.scss'],
})
export class UsuarioDetalhePage implements OnInit {

  constructor(private services: ServicesService) { }

  usuarioId: any;
  usuarioSelecionado: any;

  ngOnInit() {
    this.usuarioId = this.services.usurioId;

    this.services
    .getUsuariosDetalhe(this.usuarioId)
    .subscribe(data => {this.usuarioSelecionado = data});
  }
}
