import { Component, EventEmitter, Output } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-form', // Selector para o componente de formulário
  standalone: true, // Indica que o componente é independente
  imports: [FormsModule], // Importa o módulo de formulários do Angular
  templateUrl: './produto-form.component.html', // Caminho do template HTML
  styleUrls: ['./produto-form.component.scss'] // Caminho do estilo SCSS
})
export class ProdutoFormComponent {
  produto: ProdutoInterface = { id: 0, nome: '', quantidade: 0, preco: 0 }; // Inicializa o objeto produto

  @Output() produtoAdicionado = new EventEmitter<ProdutoInterface>(); // Emissor para notificar quando um produto é adicionado

  constructor(private produtoService: ProdutoService) {} // Injeta o serviço de produtos

  adicionarProduto(): void {
    // Método para adicionar um produto
    this.produtoService.addProduto(this.produto).then((produto) => {
      this.produtoAdicionado.emit(produto); // Emite o novo produto adicionado
      this.produto = { id: 0, nome: '', quantidade: 0, preco: 0 }; // Reseta o formulário após a adição
      alert('Produto adicionado com sucesso!'); // Mensagem de sucesso
    });
  }
}




