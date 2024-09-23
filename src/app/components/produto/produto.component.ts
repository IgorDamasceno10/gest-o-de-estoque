import { Component, Input } from '@angular/core';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { MatTableModule } from '@angular/material/table';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto', // Selector para o componente
  standalone: true, // Indica que o componente é independente
  imports: [MatTableModule], // Importa o módulo da tabela do Angular Material
  templateUrl: './produto.component.html', // Caminho do template HTML
  styleUrl: './produto.component.scss' // Caminho do estilo SCSS
})
export class ProdutoComponent {
  @Input() produtoData!: ProdutoInterface; // Dados do produto recebidos como entrada

  produtos: ProdutoInterface[] = []; // Array para armazenar a lista de produtos
  displayedColumns: string[] = ['nome', 'quantidade', 'preco']; // Colunas a serem exibidas na tabela

  constructor(private produtoService: ProdutoService) {} // Injeta o serviço de produtos

  ngOnInit(): void {
    // Método chamado na inicialização do componente
    this.produtoService.getAllProdutos().then(data => {
      this.produtos = data; // Armazena os produtos obtidos do serviço
    });
  }
}

