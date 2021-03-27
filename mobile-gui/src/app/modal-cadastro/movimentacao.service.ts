import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovimentacaoTipo } from './movimentacao-tipo.enum';
import { Movimentacao } from './movimentacao.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  private baseURL = 'http://localhost:8080/movimentacoes';

  constructor(private http: HttpClient) {}

  getMovimentacoes() {
    return this.http.get<Movimentacao[]>(this.baseURL).toPromise();
  }

  getMovimentacoesPorTipo(tipo: MovimentacaoTipo) {
    return this.http.get<Movimentacao[]>(`${ this.baseURL }/${ tipo }`).toPromise();
  }

  getRendas() {
    return this.getMovimentacoesPorTipo(MovimentacaoTipo.RENDA);
  }

  getGastos() {
    return this.getMovimentacoesPorTipo(MovimentacaoTipo.GASTO);
  }

  salvar(movimentacao: Movimentacao) {
    return this.http.post<Movimentacao>(this.baseURL, movimentacao, {
      headers: {
        "Content-Type": "application/json"
      }
    }).toPromise();
  }
}
