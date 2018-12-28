import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private services: ServicesService, private router: Router) { }

  usuarioNome: string;
  usuarioSenha: string;
  data: any = [];

  logar() {
    this.services.getUsuarios()
    .subscribe(data => {this.data = data;

      //alert(this.data[0].nome);

      for (let user of this.data) {
        console.log(user.nome);
      }
    });

      /*for (let user of this.data.users) {
        if ((user.nome == this.usuarioNome) && (user.senha == this.usuarioSenha)) {
          console.log("ok");
          break;
        } else {
          console.log("false");
        }
      }
    })*/
  
    if (!this.usuarioNome || !this.usuarioSenha) {
      this.services.alertaSimples (
        "Alerta",
        "Ausência de Dados",
        "Preencha todos os campos"
      )
    } else {
      this.services.registraLogin(this.usuarioNome);
      this.services.usuarioAutenticado = true;
      this.router.navigate(['/usuarios']);
      this.usuarioNome = "";
      this.usuarioSenha = "";
    }
  }
}
