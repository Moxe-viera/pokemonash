import { Component, Inject } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = { email: '', senha: '' };

  constructor(
    public alertController: AlertController,
    public router: Router,
    public toastController: ToastController,
    @Inject(AutenticacaoService) public autenticacaoService: AutenticacaoService,
    public angularFireAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {}

  async handleLogin() {
    const auth = getAuth();
    try {

      await signInWithEmailAndPassword(auth, this.user.email, this.user.senha).then(() => {
        this.navCtrl.navigateForward('home');
      });
    } catch (error:any) {
      this.showAlert('Erro', 'Erro ao logar', error.message);
    }
  }

  async recuperar() {
    this.router.navigateByUrl('recuperar');
  }

  async showAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
