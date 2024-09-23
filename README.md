Sistema de Gestão de Estoque
Este projeto é um sistema de gerenciamento de estoque desenvolvido com Angular. Ele permite que os usuários visualizem e adicionem produtos ao estoque de forma simples e eficiente.

Tecnologias Utilizadas
Angular: Framework utilizado para criar a aplicação web.
TypeScript: Linguagem de programação utilizada no desenvolvimento.
json-server: Usado para simular uma API RESTful para persistência de dados.
Funcionalidades
Listagem de Produtos: Exibe todos os produtos disponíveis no estoque.
Cadastro de Produtos: Permite adicionar novos produtos com informações como nome, quantidade e preço.
Design Responsivo: Interface otimizada para diferentes tamanhos de tela.
Instalação
Clone o repositório:

bash

git clone https://seu-repositorio.git
Navegue até o diretório do projeto:

bash

cd nome-do-projeto
Instale as dependências:

bash

npm install
Inicie o json-server:

Para simular uma API, certifique-se de ter o json-server instalado globalmente. Se não tiver, instale-o com:

bash

npm install -g json-server
Depois, inicie o servidor com:

bash

json-server --watch db.json
Inicie a aplicação Angular:

bash

ng serve
Acesse a aplicação:

Abra o navegador e vá para http://localhost:4200.

Uso
Na página inicial, você verá a lista de produtos disponíveis.
Para adicionar um novo produto, preencha o formulário com os detalhes e clique em "Cadastrar Produto".
Os produtos adicionados aparecerão automaticamente na lista.
Melhorias Futuras
Implementar a funcionalidade de exclusão de produtos.
Adicionar validações de formulário para entradas do usuário.
Melhorar a estética e responsividade da interface.
Contribuições
Contribuições são bem-vindas! Se você deseja contribuir para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto é licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

Sinta-se à vontade para personalizar conforme necessário!






