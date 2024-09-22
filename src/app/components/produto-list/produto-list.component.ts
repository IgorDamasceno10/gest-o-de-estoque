import { Component, inject, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule, ProdutoComponent, ProdutoFormComponent],
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {
  produtosList: ProdutoInterface[] = [];
  produtoService: ProdutoService = inject(ProdutoService);

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getAllProdutos().then(produtos => {
      this.produtosList = produtos;
    });
  }

  onProdutoAdicionado(produto: ProdutoInterface): void {
    this.produtosList.push(produto); // Adiciona o novo produto à lista
  }
}

