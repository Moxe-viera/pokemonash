import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  email:any=''
  password:any=''


  constructor( 
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }
  async cadastoUsuario(){
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await loading.present();
    try {
      this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      await loading.dismiss();
      this.showToast('CONTA CADASTRADA');
      window.location.href = '/login';
    } catch (error) {
      await loading.dismiss();
      this.showToast('ERRO AO CADASTRAR');
    }
  }
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
