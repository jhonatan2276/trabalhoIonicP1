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

  ngOnInit() {
    this.services
    .getUsuarios()
    .subscribe(data => {this.usuarios = data});
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
