# 🧥 Perfect Liberty – Sistema de Controle de Doações de Roupas

Este é um projeto de extensão acadêmica que visa apoiar a instituição religiosa **Perfect Liberty** no controle de doações de roupas de inverno. O sistema permite o cadastro, listagem e controle de estoque das peças doadas, com interface amigável e integração com banco de dados.

---

## 🛠️ Tecnologias Utilizadas

### Front-end (React)
- React.js
- Vite
- CSS customizado
- Fetch API

### Back-end (Node.js)
- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- CORS

---

## 📁 Estrutura do Projeto

PL/
├── perfect-liberty-form/ # Front-end React
├── perfect-liberty-api/ # Back-end Node + MongoDB


---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos:
- Node.js v18 ou superior
- MongoDB local ou MongoDB Atlas
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/perfect-liberty.git
cd perfect-liberty
```

### 2. Rodar o backend (API)

```bash
cd perfect-liberty-api
npm install
cp .env.example .env
# edite o .env com sua string de conexão do MongoDB
npm run dev
```

### 3. Rodar o frontend (interface)

```bash
cd perfect-liberty-form
npm install
npm run dev
```

