package br.com.assisfreitas.apiserver.controllers;

import br.com.assisfreitas.apiserver.models.Movimentacao;
import br.com.assisfreitas.apiserver.models.MovimentacaoTipo;
import br.com.assisfreitas.apiserver.repositories.interfaces.IMovimentacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Date;

@RestController
@RequestMapping("movimentacoes")
@CrossOrigin
public class MovimentacaoController {
    private final IMovimentacaoRepository repository;

    public MovimentacaoController(@Autowired IMovimentacaoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Movimentacao>> index() {
        Iterable<Movimentacao> movimentacoes = repository.findAll();
        return ResponseEntity.ok(movimentacoes);
    }

    @GetMapping("/{tipo}")
    public ResponseEntity<Iterable<Movimentacao>> selectByTipo(@PathVariable(name = "tipo") String tipo) {
        Iterable<Movimentacao> movimentacoes = repository.list(MovimentacaoTipo.valueOf(tipo.toUpperCase()));
        return ResponseEntity.ok(movimentacoes);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<Movimentacao> store(@RequestBody Movimentacao mov) {
        return ResponseEntity.ok(repository.save(mov));
    }
}

