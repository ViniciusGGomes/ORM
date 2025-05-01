# Projeto ORM com Prisma

Este projeto tem como objetivo explorar o conceito de ORM (Object-Relational Mapping) e aprender a utilizar o Prisma ORM na prática.

---

## 📌 Introdução

### O que é um ORM?

ORM (Object-Relational Mapper) é uma ferramenta que facilita a interação com bancos de dados relacionais, permitindo manipular dados como objetos na linguagem de programação, sem a necessidade de escrever consultas SQL diretamente.

**Vantagens:**

- Redução de código SQL manual
- Facilidade de manutenção
- Compatibilidade com múltiplos bancos de dados

---

## 🛠️ Tecnologias Utilizadas

- **PostgreSQL:** Banco de dados relacional avançado (ORDBMS)
  - Utilizado por meio de **imagem Docker oficial do PostgreSQL** para facilitar o ambiente de desenvolvimento.
- **Prisma:** ORM moderno para TypeScript e Node.js
- **Express:** Framework para construção de APIs
- **Express Async Errors:** Biblioteca para simplificar o tratamento de erros assíncronos.

---

## 🚀 Funcionalidades Implementadas

### CRUD de Usuários

- Criação, leitura, atualização e exclusão de usuários
- Listagem de todos os usuários (`findMany`)
- Busca de usuário específico (`findUnique`)

### CRUD de Perguntas

- Criação de perguntas relacionadas a usuários
- Listagem de perguntas com filtros e ordenação
- Atualização e exclusão de perguntas

### Relacionamentos

- Relação 1-N entre User e Question
- Integridade referencial garantida pelo Prisma

---

## 🔍 Consultas Avançadas

- Filtros com `where` e operadores como `contains`
- Busca case-insensitive
- Ordenação com `orderBy`

---

## 🌱 Seed (População do Banco)

- Arquivo `seed.ts` para popular o banco com dados iniciais.

---

## 📚 Aprendizados

- Conceitos fundamentais de ORM
- Configuração do Prisma com PostgreSQL
- Uso de imagem Docker do PostgreSQL para ambiente isolado e reprodutível
- Modelagem de dados e relacionamentos
- Operações CRUD com Prisma Client
- Tratamento de erros em APIs assíncronas
- Técnicas de consulta e filtragem de dados

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
