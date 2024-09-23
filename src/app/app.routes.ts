// app.routes.ts
import { Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';

// Definição das rotas da aplicação
export const routes: Routes = [
  { path: '', component: ProdutoListComponent, title: 'Lista de Produtos' }, // Rota para a lista de produtos
  { path: 'adicionar-produto', component: ProdutoFormComponent, title: 'Adicionar Produto' } // Rota para o formulário de adição de produto
];





