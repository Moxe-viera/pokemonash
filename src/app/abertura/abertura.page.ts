import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abertura',
  templateUrl: './abertura.page.html',
  styleUrls: ['./abertura.page.scss'],
})
export class AberturaPage {

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigateByUrl('login');
  }

  redirectToCadastro() {
    this.router.navigateByUrl('cadastro');
  }

}
