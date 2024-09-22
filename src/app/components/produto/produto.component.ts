import { Component, Input } from '@angular/core';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import {MatTableModule} from '@angular/material/table' ;
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  @Input()produtoData!:ProdutoInterface;

  produtos: ProdutoInterface[] = [];
  displayedColumns: string[] = ['nome', 'quantidade', 'preco'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getAllProdutos().then(data => {
      this.produtos = data;
    });
  }
}
