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
  nome: string;
  sobrenome: string;

  ngOnInit() {
    this.services
    .getUsuarios()
    .subscribe(data => {this.usuarios = data});
  }

  inverteNome(palavra) {
    this.nome = palavra.split(' ').slice(0, -1).join(' ');
    this.sobrenome = palavra.split(' ').slice(-1).join(' ')+", ";
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
