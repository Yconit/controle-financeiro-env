package br.com.assisfreitas.apiserver.models;

public enum MovimentacaoTipo {
    RENDA("renda"), GASTO("gasto");

    public String type;

    MovimentacaoTipo(String type) {
        this.type = type;
    }
}
