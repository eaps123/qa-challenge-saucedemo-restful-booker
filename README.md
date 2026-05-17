## 📊 Status do Projeto

![CI](https://github.com/eaps123/qa-challenge-saucedemo-restful-booker/actions/workflows/ci.yml/badge.svg)

---

# 🧪 QA Automation Challenge

Projeto de automação de testes desenvolvido para validação da aplicação **web Sauce Demo e da API Restful Booker**, cobrindo testes E2E, API e performance com foco em boas práticas de QA Automation.

---

## 📌 Objetivo

O projeto foi construído com foco em atender os requisitos do desafio técnico, contemplando:

- Testes E2E com Playwright + Cucumber
- Testes de API REST
- Testes de contrato com Zod
- Testes de performance com K6
- Integração contínua com GitHub Actions
- Evidências automatizadas
- Relatórios automatizados
- Arquitetura escalável para automação

---

## 📖 Descrição

O projeto foi desenvolvido para validar diferentes camadas de uma aplicação utilizando APIs públicas e aplicação web real.

A arquitetura foi organizada seguindo padrões enterprise de automação, separando responsabilidades em:

- clients
- services
- factories
- schemas
- tests

Além disso, foi implementada separação de ambientes (`dev`, `qa` e `prd`) para evitar hardcodes e facilitar manutenção futura.

---

## 🎯 Escopo do Desafio

## 🔹 UI Testing — SauceDemo

### Nível 1 (Obrigatório)
✔️ Login com diferentes tipos de usuários
✔️ Ordenação de produtos
✔️ Fluxo completo de compra
✔️ Remoção de itens do carrinho
✔️ Navegação entre páginas
✔️ Logout

### Nível 2 (Diferencial)
✔️ Testes automatizados
✔️ Pipeline CI/CD
✔️ Evidências automatizadas
✔️ Estrutura escalável de automação

---

## 🔹 API Testing — Restful Booker

### Nível 1 (Obrigatório)
✔️ Autenticação
✔️ CRUD de reservas
✔️ Validação de campos obrigatórios

### Nível 2 (Diferencial)
✔️ Testes de performance com K6
✔️ Automação via scripts
✔️ Pipeline automatizado

---


## 🏗️ Estrutura do Projeto

```bash
qa-challenge-saucedemo-restful-booker/
├── api/
│   ├── clients/
│   │   └── apiClient.ts
│   │
│   ├── factories/
│   │   └── booking.factory.ts
│   │
│   ├── schemas/
│   │   └── booking.schema.ts
│   │
│   ├── services/
│   │   └── booking.service.ts
│   │
│   └── tests/
│       └── booking.spec.ts
│
├── config/
│   ├── data/
│   │   ├── checkout.ts
│   │   └── users.ts
│   │ 
│   └── env/
│       ├── dev.ts
│       ├── qa.ts
│       ├── prd.ts
│       └── index.ts
│
├── docs/
│   ├── API_SCENARIOS.md
│   ├── BUG_REPORT.md
│   ├── EVIDENCES.md
│   ├── IMPROVEMENTS.md
│   ├── PERFORMANCE_REPORT.md
│   ├── RISK_ANALYSIS.md
│   ├── TEST_CASES.md
│   └── TEST_PLAN.md
│
├── e2e/
│   ├── factories/
│   │   └── checkout.factory.ts
│   │ 
│   ├── features/
│   │   ├── checkout.feature
│   │   └── login.feature
│   │ 
│   ├── pages/
│   │   ├── cart.page.ts
│   │   ├── checkout.page.ts
│   │   ├── inventory.page.ts
│   │   └── login.page.ts
│   │ 
│   ├── steps/
│   │   ├── checkout.steps.ts
│   │   └── login.steps.ts
│   │ 
│   ├── support/
│   │   ├── hooks.ts
│   │   └── world.ts
│   │ 
│   └── utils/
│       ├── faker.ts
│       └── helpers.ts
│
├── performance/
│   ├── load-test.js
│   └── config.js
│
├── reports/
│   ├── playwright-report/
│   ├── screenshots/
│   ├── videos/
│   └── index.html
│
├── scripts/
│   ├── generate-api-summary.js
│   ├── generate-performance-analysis.js
│   └── generate-report.js
│
├── .github/workflows/ci.yml
│
├── package.json
├── tsconfig.json
└── README.md
```

## 🧪 Cobertura de Testes

### 🔹 API Testing — Restful Booker

#### 🔐 Auth

✔️ Geração de token

#### 📦 Booking

✔️ Criar reserva
✔️ Buscar reserva
✔️ Atualizar reserva
✔️ Remover reserva
✔️ Validar payload inválido

---

### 🔹 Testes de Contrato (Zod)

Validação de contrato implementada utilizando **Zod Schemas** para garantir:

- ✔️ Estrutura do response
- ✔️ Tipagem dos dados
- ✔️ Contrato esperado da API
- ✔️ Proteção contra breaking changes

---

### 🔹 UI Testing — SauceDemo

#### 🔐 Login
✔️ Login com usuário válido
✔️ Login inválido
✔️ Login com usuário bloqueado
✔️ Logout
✔️ Reautenticação

#### 🛒 Carrinho
✔️ Adicionar produto
✔️ Adicionar múltiplos produtos
✔️ Remover produto do carrinho
✔️ Validação de quantidade

#### 💳 Checkout
✔️ Fluxo completo de compra
✔️ Checkout inválido
✔️ Carrinho vazio

#### 🔄 Navegação
✔️ Navegação entre páginas
✔️ Redirecionamentos esperados

#### 🔽 Produtos
✔️ Ordenação por menor preço
✔️ Interação com inventário

---

### 🔹 Performance (K6)

#### Cenários implementados
✔️ Autenticação
✔️ Criação de reservas
✔️ Consulta de reservas

#### Métricas monitoradas
✔️ Latência
✔️ Taxa de erro
✔️ Tempo de resposta P95
✔️ Throughput
✔️ Success rate

#### Observações

Durante os testes de carga foi identificado comportamento de degradação sob alta concorrência na API pública, indicando possíveis limitações externas como:

- rate limiting
- throttling
- instabilidade sob carga

Como a API utilizada é pública, esse comportamento foi tratado como limitação externa e documentado como risco técnico.

---

## 🧱 Padrões e Boas Práticas Aplicadas

✔️ Page Object Model
✔️ Factory Pattern
✔️ Service Layer Pattern
✔️ Separação de responsabilidades
✔️ BDD com Cucumber
✔️ Reutilização de código
✔️ Tipagem com TypeScript
✔️ Estrutura desacoplada
✔️ Evidências automatizadas
✔️ Pipeline CI/CD
✔️ Geração de relatórios

---

## ⚙️ Tecnologias Utilizadas

- Playwright
- Cucumber
- TypeScript
- Node.js
- K6
- GitHub Actions
- Zod

---

## ▶️ Como executar o projeto

### 1. Clonar repositório

```bash
git clone https://github.com/eaps123/qa-challenge-saucedemo-restful-booker
cd qa-challenge-saucedemo-restful-booker
```
### 2. Instalar dependências

```bash
npm install
```
---

### 3. Instalar browsers do Playwright

```bash
npx playwright install
```
---

## 🧪 Execução dos testes

### ✔️ Testes E2E

```bash
npm run test:e2e
```
---

### ✔️ Testes de API

```bash
npm run test:api
```
---

### ✔️ Testes de Performance (K6)

```bash
npm run test:performance
```
---

### ✔️ Execução completa

```bash
npm run test:full
```
---

## 📊 Relatórios e evidências

Os relatórios são gerados automaticamente em::
```bash
/reports
```
Incluindo:

-   📊 Relatório HTML
-   📸 Screenshots automáticos
-   🎥 Vídeos de execução
-   ⚡ Relatório K6
-   📈 Análise de performance

---

## 🌐 Dashboard online

Acesse o dashboard publicado via GitHub Pages:

https://eaps123.github.io/qa-challenge-saucedemo-restful-booker/

---

## ⚙️ CI/CD

Pipeline automatizado com **GitHub Actions**, responsável por:

### Fluxos automatizados
✔️ Instalação de dependências
✔️ Execução API
✔️ Execução E2E
✔️ Execução K6
✔️ Geração de relatórios
✔️ Upload de artifacts
✔️ Deploy GitHub Pages

📍 Acesse na aba **Actions** do repositório

---

## 📸 Evidências

O projeto gera automaticamente:
-   screenshots por cenário
-   gravações de execução
-   relatórios HTML
-   relatórios de performance

---

## 🔎 Análise de Riscos

### UI
-   Dependência de ambiente externo público
-   Possíveis mudanças de layout
-   Instabilidade intermitente da aplicação

### API
-   Rate limiting
-   Instabilidade da API pública
-   Respostas inconsistentes sob carga

## 💡 Sugestões de Melhoria

- Implementação de testes visuais
- Integração com Allure Report
- Execução paralela em múltiplos browsers
- Testes de acessibilidade automatizados
- Integração com Docker
- Execução distribuída em cloud

---

## 📌 Premissas Assumidas

* APIs públicas podem sofrer instabilidade
* Ambiente SauceDemo pode apresentar lentidão eventual
* Testes de performance foram executados respeitando limitações públicas da API

---
## Autor
- Everton Alves Pedro
- QA Engineer | Automação de Testes
GitHub:
* https://github.com/eaps123