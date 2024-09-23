import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../interfaces/produto-interface';

@Injectable({
  providedIn: 'root' // Torna o serviço disponível em toda a aplicação
})
export class ProdutoService {
  url = 'http://localhost:3000/produtos'; // URL do json-server onde os produtos estão armazenados

  constructor() { }

  // Método para buscar todos os produtos
  async getAllProdutos(): Promise<ProdutoInterface[]> {
    const response = await fetch(this.url); // Faz uma requisição para obter todos os produtos
    return response.json(); // Retorna a resposta como um array de produtos
  }

  // Método para buscar um produto pelo ID
  async getProdutoById(id: number): Promise<ProdutoInterface | undefined> {
    const response = await fetch(`${this.url}/${id}`); // Faz uma requisição para obter um produto específico
    return response.json(); // Retorna o produto encontrado
  }

  // Método para adicionar um produto
  async addProduto(produto: ProdutoInterface): Promise<ProdutoInterface> {
    const response = await fetch(this.url, {
      method: 'POST', // Método para adicionar um novo produto
      headers: {
        'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(produto) // Converte o objeto produto em uma string JSON
    });
    return response.json(); // Retorna o produto adicionado
  }

  // Método para atualizar um produto existente
  async updateProduto(id: number, produto: ProdutoInterface): Promise<ProdutoInterface> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT', // Método para atualizar um produto
      headers: {
        'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(produto) // Converte o objeto produto em uma string JSON
    });
    return response.json(); // Retorna o produto atualizado
  }

  // Método para excluir um produto pelo ID
  async deleteProduto(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE' // Método para excluir um produto
    });
  }
}

