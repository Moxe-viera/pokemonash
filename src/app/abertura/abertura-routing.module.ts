import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AberturaPage } from './abertura.page';

const routes: Routes = [
  {
    path: '',
    component: AberturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AberturaPageRoutingModule {}
