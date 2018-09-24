import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit() {
  }

  logar() {
    this.service.usuarioAutenticado = true;
    this.router.navigate(['/usuarios']);
  }
}
