import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: ServicesService, private router: Router) { }

  usuarioNome: string;
  usuarioSenha: string;

  logar() {
    if (!this.usuarioNome || !this.usuarioSenha) {
      this.service.alertaSimples (
        "Alerta",
        "Ausência de Dados",
        "Preencha todos os campos"
      )
    } else {
      this.service.registraLogin(this.usuarioNome);
      this.service.usuarioAutenticado = true;
      this.router.navigate(['/usuarios']);
      this.usuarioNome = "";
      this.usuarioSenha = "";
    }
  }
}
