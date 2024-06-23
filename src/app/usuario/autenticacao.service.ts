import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, senha: string): Promise<any> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, senha);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, senha: string): Promise<any> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, senha);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
