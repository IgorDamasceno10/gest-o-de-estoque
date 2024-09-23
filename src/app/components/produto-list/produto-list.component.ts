import { Component, inject, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';

@Component({
  selector: 'app-produto-list', // Selector para o componente de lista de produtos
  standalone: true, // Indica que o componente é independente
  imports: [CommonModule, ProdutoComponent, ProdutoFormComponent], // Importa módulos e componentes necessários
  templateUrl: './produto-list.component.html', // Caminho do template HTML
  styleUrls: ['./produto-list.component.scss'] // Caminho do estilo SCSS
})
export class ProdutoListComponent implements OnInit {
  produtosList: ProdutoInterface[] = []; // Lista de produtos a ser exibida
  produtoService: ProdutoService = inject(ProdutoService); // Injeta o serviço de produtos usando a função inject

  ngOnInit(): void {
    // Método chamado na inicialização do componente
    this.carregarProdutos(); // Carrega a lista de produtos
  }

  carregarProdutos(): void {
    // Método para carregar produtos do serviço
    this.produtoService.getAllProdutos().then(produtos => {
      this.produtosList = produtos; // Atualiza a lista de produtos
    });
  }

  onProdutoAdicionado(produto: ProdutoInterface): void {
    // Método chamado quando um novo produto é adicionado
    this.produtosList.push(produto); // Adiciona o novo produto à lista
  }
}


