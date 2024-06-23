import { Component } from '@angular/core';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { EfeitosVisuaisService } from '../services/efeitos/efeitos-visuais.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {


  email = '';
  mensagem = '';
  erro:string =  "";

  constructor(private efeitos:EfeitosVisuaisService,private router: Router) { }


  recuperarSenha() {
    const auth = getAuth();
sendPasswordResetEmail(auth, this.email)
  .then(() => {
    this.mensagem = 'Email de recuperação de senha enviado.';
    this.efeitos.mostrarToast(true, 'Email de recuperação de senha enviado.');
    this.email = '';
    setInterval(() => {
      this.mensagem = '';
    }, 3000);
  })
  .catch(() => {
    this.efeitos.mostrarToast(false, 'Não foi possível enviar o email de recuperação de senha. Verifique se o email foi digitado corretamente.');
    this.email = '';

  });
}

redirectToAbertura() {
  this.router.navigateByUrl('abertura');
}

  

}
