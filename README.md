# 🧠 Projeto M4 - Controle de Atividades de Fala

Este projeto tem como objetivo ajudar no controle de sessões de prática de fala, vinculadas a diferentes atividades, permitindo o registro e acompanhamento do tempo dedicado a cada prática.

## 🚩 Problematização

Durante o processo de aprendizagem de um novo idioma ou prática profissional, muitas pessoas realizam diversas sessões de fala, mas **não conseguem mensurar o tempo total dedicado** ou **organizar as sessões por tipo de atividade** (ex: "treinar inglês", "reunião de trabalho", "preparação para apresentação").

Este sistema resolve esse problema permitindo:

- Cadastro de atividades (ex: "Praticar inglês")
- Registro de sessões de fala com duração (em minutos)
- Consulta do tempo total de prática
- Visualização de todas as sessões com suas respectivas atividades

## 🚀 Tecnologias usadas

- Node.js
- Express
- Sequelize (ORM)
- SQLite (banco de dados leve)
- Nodemon (desenvolvimento)

## 📂 Estrutura do Projeto

```bash
src/
├── controller/
│   └── controller.js
├── database/
│   ├── database.js
│   └── database.sqlite
├── models/
│   └── index.js
├── router/
│   └── router.js
└── server.js
