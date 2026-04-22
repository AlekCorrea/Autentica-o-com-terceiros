# 🔐 Autenticação com Google OAuth + JWT

Este projeto implementa um sistema de autenticação utilizando **Google OAuth 2.0** e **JSON Web Token (JWT)**, com backend estruturado em padrão MVC e execução via Docker.

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/autenticacao-oauth.git
cd autenticacao-oauth
```

---

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend/` com base no `.env.example`:

```env
GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=seu_client_secret
JWT_SECRET=segredo
```

---

### 3. Executar com Docker

```bash
docker-compose up --build
```

---

### 4. Acessar a aplicação

Abra no navegador:

```
http://localhost:8080
```

---

## 🔄 Fluxo da aplicação

1. Usuário realiza login com Google
2. Google autentica o usuário
3. Backend gera um token JWT
4. Usuário acessa rotas protegidas

---

## 🧪 Modo de teste (sem Google)

Para facilitar a execução sem necessidade de configurar OAuth no Google Cloud, o sistema possui um modo de teste:

* Basta clicar em **"Entrar sem Google"**
* Um usuário fictício será autenticado
* O sistema gera um token JWT normalmente

---

## 🛠 Tecnologias utilizadas

* Node.js
* Express
* Google OAuth 2.0
* JSON Web Token (JWT)
* Docker
* Nginx

---

## 📁 Estrutura do projeto

```
backend/
frontend/
docker-compose.yml
```

---

## ⚠️ Observações

* O arquivo `.env` não deve ser versionado
* Para uso com Google OAuth, é necessário configurar no Google Cloud Console
* URL de callback utilizada:

```
http://localhost:3000/auth/google/callback
```

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos.
