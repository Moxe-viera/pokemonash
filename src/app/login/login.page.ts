import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isAuthenticated: boolean = false;

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await loading.present();
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      //console.log(user);
      await loading.dismiss();
      this.isAuthenticated = true;
      this.showToast('ESTAMOS CONECTADOS');
      window.location.href = '/home';
    } catch (error) {
      await loading.dismiss();
      this.showToast('NÃO ESTAMOS CONECTADOS');
    }
  }
  async logout() {
    await this.afAuth.signOut();
    this.isAuthenticated = false;
    this.showToast('DESCONECTADOS COM SUCESSO');
  }
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}

