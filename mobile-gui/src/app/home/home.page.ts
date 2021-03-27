import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalCadastroPage } from '../modal-cadastro/modal-cadastro.page';
import { MovimentacaoTipo } from '../modal-cadastro/movimentacao-tipo.enum';
import { Movimentacao } from '../modal-cadastro/movimentacao.model';
import { MovimentacaoService } from '../modal-cadastro/movimentacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  gastos: Movimentacao[] = [];
  rendas: Movimentacao[] = [];

  constructor(private movimentacaoService: MovimentacaoService,
              private modal: ModalController,
              private loader: LoadingController) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    const loader = await this.loader.create({
      message: 'Procurando movimentações',
      spinner: 'dots'
    });
    
    loader.present();
    const movimentacoes = await this.movimentacaoService.getMovimentacoes();

    this.gastos = movimentacoes.filter((mov) => mov.tipo === MovimentacaoTipo.GASTO);
    this.rendas = movimentacoes.filter((mov) => mov.tipo === MovimentacaoTipo.RENDA);
    loader.dismiss();
  }

  async cadastroMovimentacao() {
    const modal = await this.modal.create({
      component: ModalCadastroPage,
      cssClass: 'my-custom-class',

    });

    modal.onDidDismiss().then(() => this.load());

    return await modal.present();
  }

  get totalRenda() {
    return this.getTotal(this.rendas);
  }

  get totalGasto() {
    return this.getTotal(this.gastos);
  }

  get totalDisponivel() {
    return this.totalRenda - this.totalGasto;
  }

  getTotal(movimentacoes: Movimentacao[]) {

    if (movimentacoes.length) {
      return movimentacoes.map((mov) => mov.valor).reduce((anterior, atual) => anterior + atual);
    }

    return 0;
  }

  doRefresh(e) {
    this.load();
    e.target.complete();
  }
}
