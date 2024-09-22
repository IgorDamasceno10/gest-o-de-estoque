import { Component, EventEmitter, Output } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  produto: ProdutoInterface = { id: 0, nome: '', quantidade: 0, preco: 0 };

  @Output() produtoAdicionado = new EventEmitter<ProdutoInterface>();

  constructor(private produtoService: ProdutoService) {}

  adicionarProduto(): void {
    this.produtoService.addProduto(this.produto).then((produto) => {
      this.produtoAdicionado.emit(produto); // Emite o novo produto
      this.produto = { id: 0, nome: '', quantidade: 0, preco: 0 }; // Reseta o formulário
      alert('Produto adicionado com sucesso!');
    });
  }
}




