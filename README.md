# Projeto05-TPII: Sistema CRUD com Node.js, SQLite e API ViaCEP

Este projeto é um sistema web desenvolvido como atividade acadêmica (Projeto05-TPII). Ele implementa um CRUD (Create, Read, Update, Delete) completo de usuários, utilizando **Node.js** nativo (sem frameworks como Express) no back-end, um banco de dados **SQLite** para persistência e integração com a **API ViaCEP** para preenchimento automático de endereços no front-end. O projeto também inclui um sistema de verificação de acesso utilizando o padrão de projeto *Chain of Responsibility*.

## 🚀 Tecnologias Utilizadas

*   **Back-end:** Node.js (Módulos nativos: `http`, `path`, `fs`, `url`)
*   **Banco de Dados:** SQLite (`sqlite3`)
*   **Front-end:** HTML5, CSS3, JavaScript (Vanilla)
*   **API Externa:** [ViaCEP](https://viacep.com.br/) (para consulta de CEP)
*   **Padrão de Projeto:** Chain of Responsibility (para validação de acesso)

## 📁 Estrutura do Projeto

*   **`app.js`**: Arquivo principal do servidor Node.js. Gerencia o roteamento da API RESTful (`/api/pessoas` e `/api/acesso`) e serve os arquivos estáticos (HTML).
*   **`database.js`**: Configura a conexão com o banco de dados SQLite (`database.sqlite`) e cria a tabela `pessoas` com dados iniciais, caso não exista.
*   **`src/chainAcesso.js`**: Implementa o padrão de projeto *Chain of Responsibility* para validar o acesso de usuários baseando-se no e-mail cadastrado.
*   **`public/`**: Contém as páginas HTML servidas para o cliente:
    *   `acesso.html`: Tela de controle de acesso (verifica se o e-mail é de um aluno cadastrado).
    *   `cadatrar.html`: Formulário para cadastro de novas pessoas, com busca automática de endereço via CEP.
    *   `listar.html`: Tabela que lista todos os cadastros e oferece botões para editar ou excluir.
    *   `editar.html` / `index.html`: Formulários para atualização de dados de uma pessoa existente.
*   **`package.json`**: Define as dependências (SQLite3), scripts e informações do projeto.

## 🛠️ Como Executar

### Pré-requisitos
*   [Node.js](https://nodejs.org/) instalado na máquina.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/yasminandrade8/Projeto05-TPII.git](https://github.com/yasminandrade8/Projeto05-TPII.git)
    cd Projeto05-TPII
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    *O banco de dados SQLite será criado automaticamente e populado com dados iniciais na primeira execução.*

4.  **Acesse no navegador:**
    Abra o link [http://localhost:3000/](http://localhost:3000/) no seu navegador.

## ⚙️ Funcionalidades

*   **API RESTful:** Endpoints nativos (`GET`, `POST`, `PUT`, `DELETE`) para gerenciar as pessoas.
*   **Integração ViaCEP:** Ao digitar um CEP no formulário de cadastro ou edição, o sistema busca os dados e preenche automaticamente os campos de endereço (Logradouro, Bairro, Cidade, Estado).
*   **Validação de Acesso (Chain of Responsibility):** A rota `/api/acesso` verifica em etapas se um e-mail foi fornecido, se é válido e se pertence a um usuário cadastrado no banco de dados.

## 👩‍💻 Autora
Feito com 💜 por Yasmin Andrade
