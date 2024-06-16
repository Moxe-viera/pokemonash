import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: 'moisescezar@souunisuam.com.br',
    password: '123456'
  };

  constructor(private navCtrl: NavController) {}

  onLogin() {
    // Aqui você pode adicionar a lógica de autenticação, como chamar uma API
    console.log('Login data:', this.loginData);

    // Se o login for bem-sucedido, navegue para a página principal
    this.navCtrl.navigateRoot('/home');
  }
}
