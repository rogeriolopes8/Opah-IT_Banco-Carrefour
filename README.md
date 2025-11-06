🚀 Desafio de Automação de Testes — Banco Carrefour

Este repositório contém duas soluções completas desenvolvidas para os desafios técnicos do Banco Carrefour:

🧩 Automação de Testes de API

📱 Automação de Testes Mobile

Cada projeto foi construído de forma modular, com boas práticas, organização e geração de relatórios automáticos.

🧩 Projeto 1 — Automação de Testes de API
📋 Descrição

Projeto desenvolvido com Robot Framework para automação de testes de API, validando os endpoints do sistema Serverest (https://serverest.dev
).
Os testes cobrem todo o fluxo de CRUD (Create, Read, Update, Delete) com autenticação JWT.

🧰 Tecnologias

Python 3

Robot Framework

RequestsLibrary

JSONLibrary

Collections

▶️ Execução

Criar ambiente virtual e instalar dependências:

python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt


Rodar testes:

python -m robot -d reports tests/


Relatórios disponíveis em:

reports/log.html

reports/report.html

✅ Cobertura

Login e geração de token

Criação de usuário (POST)

Consulta de usuários (GET)

Atualização de usuário (PUT)

Exclusão de usuário (DELETE)

📱 Projeto 2 — Automação de Testes Mobile
📋 Descrição

Projeto desenvolvido com WebdriverIO + Appium, utilizando o aplicativo Native Demo App do WebdriverIO.
Os testes validam login, formulários, navegação, WebView, swipe e drag & drop.

🧰 Tecnologias

Node.js + NPM

WebdriverIO

Appium

Mocha + Chai

Allure Reports

▶️ Execução

Instalar dependências:

npm install


Iniciar o emulador Android ou conectar dispositivo.

Rodar os testes:

npx wdio run wdio.android.conf.js


Gerar e abrir relatório:

npx allure generate ./reports/allure-results --clean -o ./reports/allure-report
npx allure open ./reports/allure-report

✅ Cobertura

Login com credenciais válidas

Login inválido

Login com campos vazios

Cadastro com sucesso

Cadastro com e-mail inválido

Navegação entre telas (Home → Forms)

Envio de formulário com sucesso

Envio de formulário com erro

WebView (mudança de contexto e validação)

Swipe e Drag & Drop
