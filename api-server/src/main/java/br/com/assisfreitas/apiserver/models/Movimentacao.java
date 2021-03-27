package br.com.assisfreitas.apiserver.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "movimentacoes", schema = "controle_financeiro")
public class Movimentacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "data", nullable = false)
    private Date data;

    @Column(name = "label", nullable = false)
    private String label;

    @Column(name = "valor", nullable = false)
    private BigDecimal valor;

    @Column(name = "tipo", nullable = false)
    private MovimentacaoTipo tipo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public MovimentacaoTipo getTipo() {
        return tipo;
    }

    public void setTipo(MovimentacaoTipo tipo) {
        this.tipo = tipo;
    }

    public void setTipo(String tipo) { this.tipo = MovimentacaoTipo.valueOf(tipo.toUpperCase()); }
}
