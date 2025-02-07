# Mobile Demo Automation

## Visão Geral
Este projeto é um framework de testes automatizados para aplicativos móveis usando WebdriverIO, Mocha e Appium. Ele foi projetado para rodar testes localmente ou no BrowserStack, com suporte para marcações (tags), estrutura baseada em Page Objects e definições de etapas (Steps).

## Recursos
- **Estrutura Modular**: Organizado usando o modelo Page Object (POM) e definições de etapas.
- **Execução de Testes por Tag**: Permite rodar testes específicos com marcações do Mocha.
- **Suporte a Múltiplos Ambientes**: Execução em dispositivos locais ou no BrowserStack.
- **Relatórios Automáticos**: Geração de relatórios Allure para análise detalhada dos testes.
- **Integração com Appium & WebdriverIO**: Compatível com dispositivos Android.
- **Tratamento de Erros & Captura de Tela**: Captura screenshots em falhas.

## Estrutura do Projeto
```
├── tests
│   ├── specs        # Especificações dos testes (casos de teste)
│   ├── steps        # Definições de etapas para os casos de teste
│   ├── support      # Dados de teste e utilitários
├── page             # Objetos de página para interações com a UI
├── reports          # Relatórios gerados (ex.: Allure)
├── wdio.conf.mjs    # Configuração do WebdriverIO
├── package.json     # Dependências e scripts do projeto
```

## Instalação
Certifique-se de ter o **Node.js** instalado e execute:
# Instalar dependências do projeto
npm install

**Crie uma conta no BrowserStack** 
Para preencher as variavéis de ambiente no arquivo .env: 

```sh
BROWSERSTACK_USER || BROWSERSTACK_KEY || BROWSERSTACK_APP_ID
```

## ✅ Executando Testes
### Rodar Todos os Testes
```sh
npm run test:all
```

### Rodar Testes por Tag
```sh
npm run test:tag "@smoke"
```
Para múltiplas tags:
```sh
npm run test:tag "@smoke|@critical"
```

### Gerar e Visualizar Relatórios
```sh
allure generate allure-results --clean
allure open
```
