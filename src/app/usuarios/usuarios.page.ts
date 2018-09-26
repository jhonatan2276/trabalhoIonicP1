import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private services: ServicesService, private router: Router) { }

  usuarios: any;
  usuarioNome: string;
  usuarioSobrenome: string;

  ngOnInit() {
    this.services
    .getUsuarios()
    .subscribe(data => {this.usuarios = data});
  }

  inverteNome(palavra) {
    var nome = palavra.split(' ').slice(0, -1).join(' ');
    var sobrenome = palavra.split(' ').slice(-1).join(' ');
    return sobrenome+", "+nome
  }

  exibiDetalhes(usuarioId) {
    this.services.usurioId = usuarioId;
    this.router.navigate(['/usuario-detalhe']);
  }

  logout() {
    this.router.navigate(['/home']);
    this.services.usuarioAutenticado = false;
  }
}
