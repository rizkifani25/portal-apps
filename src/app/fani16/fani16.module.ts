import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fani16PageRoutingModule } from './fani16-routing.module';

import { Fani16Page } from './fani16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fani16PageRoutingModule
  ],
  declarations: [Fani16Page]
})
export class Fani16PageModule {}
