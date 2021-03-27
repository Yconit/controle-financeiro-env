import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadastroPageRoutingModule } from './modal-cadastro-routing.module';

import { ModalCadastroPage } from './modal-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadastroPageRoutingModule
  ],
  declarations: [ModalCadastroPage]
})
export class ModalCadastroPageModule {}
