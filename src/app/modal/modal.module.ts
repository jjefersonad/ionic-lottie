import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ComponentesComponent } from '../componentes/componentes.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [ModalPage,ComponentesComponent]
})
export class ModalPageModule {}
