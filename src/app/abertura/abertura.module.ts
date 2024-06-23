import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AberturaPageRoutingModule } from './abertura-routing.module';

import { AberturaPage } from './abertura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AberturaPageRoutingModule
  ],
  declarations: [AberturaPage]
})
export class AberturaPageModule {}
