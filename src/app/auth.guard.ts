import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private services: ServicesService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.services.usuarioAutenticado == true) {
      return true;
    }
    
    this.services.alertaSimples(
      "Alerta",
      "Você não tem permissão para acessar o sistema",
      "Você será redirecionado para tela de Login"
    )
    this.router.navigate(['/home']);
    return false;
  }
}
