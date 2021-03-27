import { MovimentacaoTipo } from "./movimentacao-tipo.enum";

export class Movimentacao {
    data: Date;
    label: string;
    valor: number;
    tipo: MovimentacaoTipo;
}