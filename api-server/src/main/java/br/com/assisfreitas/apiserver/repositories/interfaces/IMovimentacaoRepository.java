package br.com.assisfreitas.apiserver.repositories.interfaces;

import br.com.assisfreitas.apiserver.models.Movimentacao;
import br.com.assisfreitas.apiserver.models.MovimentacaoTipo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IMovimentacaoRepository extends PagingAndSortingRepository<Movimentacao, Long> {
    @Query("select m from Movimentacao m where m.tipo = ?1")
    Iterable<Movimentacao> list(MovimentacaoTipo tipo);
}
