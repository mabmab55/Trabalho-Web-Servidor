# Mike (Don't do it)

<p align="left">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mabmab55/Trabalho-Web-Servidor?color=%2304D361" />

  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/progress-100%25-brightgreen.svg" alt="Progress">
  </a>
	
  <a href="https://github.com/mabmab55/Trabalho-Web-Servidor/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mabmab55/Trabalho-Web-Servidor">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

> Ecommerce especializado na venda de tênis

### Contribuidores

[Emerson Lacerda](https://github.com/mabmab55)

-   [x] Criação da página de listagem dos produtos, validação se o usuário tem acesso de administrador ou não, criação do vetor de objetos para simular informações vindas de um banco, configuração inicial do projeto com express, typescript e handlebars.
-   [x] Criação dos models e controllers tanto do usuário quanto do produto para adequação com a implementação do uso de banco de dados.

[Roberson Andrade](https://github.com/Roberson-Andrade)

-   [x] Criação da página de cadastro e login, autenticação de sessão com cookies para manter o usuário logado e expiração de validação, configuração da rota main do projeto, configuração do tailwind e prettier
-   [x] Configuração base do docker para implementação do uso de banco de dados SQL além da adição de repositories para intermediar a comunicação da aplicação com o banco de dados.

[Luís Otávio](https://github.com/LuisODR)

-   [x] Criação da página para exibição individual do produto, página de cadastro de produtos, populou o vetor de objetos para simular um banco de dados, dinamização para redirecionar a página do produto desejado com base em seu id.
-   [x] Refatoração dos views para adequação com o uso do banco de dados além da refatoração das rotas implementadas na primeira parte do trabalho e funções utils.

### Funcionalidades

-   Autenticação
-   Permissões
-   Criação de conta
-   Listagem dos produtos
-   Página de detalhes de um produto específico
-   Adição de novos produtos (somente para administradores)

### Tecnologias

-   Typescript
-   Node
-   Express
-   Tailwindcss
-   Handlebars
-   Docker
-   SQL

### 💻 Pré-requisitos

Antes de começar, certifique-se de atender aos seguintes requisitos:

-   [NodeJs v10.x+](https://nodejs.org/en);

### 📦 Configurando o ambiente

Para configurar e executar este aplicativo, siga estas etapas:

Baixe o projeto e instale as dependências:

```bash
# Clone este repositório
git clone https://github.com/mabmab55/Trabalho-Web-Servidor.git

# Entre na pasta do projeto
cd Trabalho-Web-Servidor

# Instale as dependências
npm install
```

### ☕ Rodando a aplicação em desenvolvimento

Para rodar a aplicação, siga esses passos:

```bash
# Rode o banco
docker compose up -d

# Rode o projeto
npm run dev

# Vá para o browser e acesse
http://localhost:3000/
```

### ⚙️ Buildando a aplicação para produção

Para rodar a aplicação, siga esses passos:

```bash
# Rode o banco
docker compose up -d

# Rode o comando de build
npm run build

# Inicie o servidor a partir da versão de produção
npm run start

# Vá para o browser e acesse
http://localhost:3000/
```

### 💡 Observações importantes

-   Somente usuários administradores podem inserir novos produtos
-   Só existe um usuário administrador para utilização, as credenciais são:
    -   admin@email.com
    -   1234
-   Todos os usuários que forem criados pelo `/signup` são usuários não administradores
