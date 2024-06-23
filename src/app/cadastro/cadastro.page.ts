import { Component } from '@angular/core';
import axios from 'axios';
import { AlertController, NavController } from '@ionic/angular';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  user = { email: '', password: '' ,name: ''};

  constructor(public alertController: AlertController, private navCtrl: NavController) {}

  async handleCreateUser(user: { email: string; password: string }) {
    const auth = getAuth();
    await
    createUserWithEmailAndPassword(auth, user.email, user.password).then(() => {
      this.showAlert('Sucesso', 'Usuário criado', 'Usuário criado com sucesso!');
      this.navCtrl.navigateForward('login');
    }).catch((error) => {
      this.showAlert('Erro', 'Erro ao criar usuário', error.message);
    }
    );


    
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
