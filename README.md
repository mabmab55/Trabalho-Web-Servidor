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

-   [x] Página de listagem de produtos

[Roberson Andrade](https://github.com/Roberson-Andrade)

-   [x] Autenticação + sessão

[Luís Otávio](https://github.com/LuisODR)

-   [x] Página de detalhes de um produto

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
# Rode o projeto
npm run dev

# Vá para o browser e acesse
http://localhost:3000/
```

### ⚙️ Buildando a aplicação para produção

Para rodar a aplicação, siga esses passos:

```bash
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
