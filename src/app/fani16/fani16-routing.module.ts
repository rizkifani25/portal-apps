import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fani16Page } from './fani16.page';

const routes: Routes = [
  {
    path: '',
    component: Fani16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fani16PageRoutingModule {}
