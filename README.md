# 🧠 Projeto M4 - Controle de Prática de Fala em Inglês

Este projeto foi desenvolvido com o objetivo de auxiliar estudantes que desejam **aprimorar suas habilidades de fala em inglês**, acompanhando de forma prática o tempo dedicado a diferentes tipos de atividades. Ele permite o **registro de sessões de fala**, o **agrupamento por atividade**, e o **cálculo do tempo total praticado**, incentivando uma rotina de estudos mais organizada e eficiente.

---

## 🚩 Problematização

No processo de aprendizado de um novo idioma, principalmente o inglês, muitas pessoas se dedicam a falar sozinhas, fazer apresentações simuladas, participar de grupos de conversação, entre outras atividades. Porém, **não existe um controle fácil e acessível do tempo total que está sendo investido em cada uma dessas práticas**.

Sem esse controle, o estudante pode ter a falsa impressão de que está praticando o suficiente, quando na verdade poderia estar se dedicando mais — ou de forma mais equilibrada entre atividades diferentes.

Este sistema resolve esse problema, permitindo ao estudante:

- Cadastrar diferentes tipos de atividades de prática de fala (ex: "Conversação com amigos", "Prática de entrevista", "Aula particular").
- Registrar cada sessão de prática, incluindo o tempo (em minutos) e a atividade correspondente.
- Visualizar todas as sessões cadastradas com suas respectivas atividades.
- Consultar o **tempo total de prática de fala**, servindo como motivação e autoavaliação.

---

## 🚀 Tecnologias usadas

- Node.js
- Express
- Sequelize (ORM)
- SQLite (banco de dados leve e local)
- Nodemon (para desenvolvimento)

---

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
```

---

## 🔧 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o servidor:
   ```bash
   npm run dev
   ```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Banco de dados simulado

Ao iniciar o projeto, um banco de dados local (`database.sqlite`) será criado automaticamente com dados iniciais, simulando o uso real. Os dados incluem:

- **Atividades:**
  - "Praticar Inglês"
  - "Reunião de trabalho"

- **Sessões de Fala:**
  - Sessão de 30 minutos vinculada à "Praticar Inglês"
  - Sessão de 45 minutos vinculada à "Reunião de trabalho"

Esses dados servem como exemplo e facilitam a visualização das funcionalidades ao acessar os endpoints `GET`.

---

## 🔍 Rotas disponíveis

### 📄 GET `/atividades`
Retorna todas as atividades cadastradas no sistema.

### 📄 GET `/sessoes`
Retorna todas as sessões de fala registradas, incluindo os dados da atividade associada.

### 📄 GET `/tempo-total`
Retorna o tempo total de prática de fala somando a duração de todas as sessões.

---

## 🎓 Finalidade

Este projeto é **voltado ao estudo e prática da comunicação em inglês**, mas pode ser adaptado para qualquer outro idioma ou tipo de atividade prática. Serve como ferramenta de apoio para quem quer manter uma rotina de aprendizado mais estruturada, com foco no desenvolvimento real da habilidade oral.

---

## 👤 Autor

Feito com ❤️ para fins de aprendizado por Thalita Nicacio.


