import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { MovimentacaoTipo } from './movimentacao-tipo.enum';
import { Movimentacao } from './movimentacao.model';
import { MovimentacaoService } from './movimentacao.service';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.page.html',
  styleUrls: ['./modal-cadastro.page.scss'],
})
export class ModalCadastroPage implements OnInit {
  renda = true;
  movimentacao = new Movimentacao();

  constructor(private modal: ModalController,
              private movimentacaoService: MovimentacaoService,
              private loader: LoadingController,
              private alert: AlertController) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

  toogleRendaGasto(value: string) {
      this.renda = value === 'renda';
  }

  async salvar() {
    const loading = await this.loader.create({
      message: 'Salvando movimentação...',
      spinner: 'dots'
    });

    const alert = await this.alert.create({
      buttons: ['OK']
    });

    loading.present();

    this.movimentacao.tipo = this.renda ? MovimentacaoTipo.RENDA : MovimentacaoTipo.GASTO;
    this.movimentacao.data = moment(this.movimentacao.data, 'YYYY-MM-DD').toDate();
    try {
      const movimentacao = await this.movimentacaoService.salvar(this.movimentacao);
      alert.header = 'Sucesso :)';
      alert.message = `Sua movimentação foi gravada com sucesso`;

      alert.present();

      this.movimentacao = new Movimentacao();
    } catch (e) {
      console.log(e);
      alert.header = 'Oops...';
      alert.message = `Ocorreu um erro ao salvar ${ e }`;

      alert.present();
    }

    loading.dismiss();
  }

}
