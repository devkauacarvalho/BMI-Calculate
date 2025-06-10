<<<<<<< HEAD
BMI Calculate App
=======
# Documentação do Projeto: Aplicativo de Cálculo de IMC

## Sumário

1.  [Sobre o Projeto](https://www.google.com/search?q=%231-sobre-o-projeto)
      * [Objetivo](https://www.google.com/search?q=%23objetivo)
      * [Funcionalidades](https://www.google.com/search?q=%23funcionalidades)
2.  [Tecnologias Utilizadas](https://www.google.com/search?q=%232-tecnologias-utilizadas)
3.  [Começando](https://www.google.com/search?q=%233-come%C3%A7ando)
      * [Pré-requisitos](https://www.google.com/search?q=%23pr%C3%A9-requisitos)
      * [Instalação](https://www.google.com/search?q=%23instala%C3%A7%C3%A3o)
4.  [Executando a Aplicação](https://www.google.com/search?q=%234-executando-a-aplica%C3%A7%C3%A3o)
      * [Servidor de Desenvolvimento](https://www.google.com/search?q=%23servidor-de-desenvolvimento)
      * [Construindo para Produção](https://www.google.com/search?q=%23construindo-para-produ%C3%A7%C3%A3o)
      * [Executando Testes](https://www.google.com/search?q=%23executando-testes)
      * [Análise de Código (Linting)](https://www.google.com/search?q=%23an%C3%A1lise-de-c%C3%B3digo-linting)
5.  [Estrutura do Projeto](https://www.google.com/search?q=%235-estrutura-do-projeto)
6.  [Estilização](https://www.google.com/search?q=%236-estiliza%C3%A7%C3%A3o)
7.  [Contribuição](https://www.google.com/search?q=%237-contribui%C3%A7%C3%A3o)
8.  [Licença](https://www.google.com/search?q=%238-licen%C3%A7a)

-----

## 1\. Sobre o Projeto

### Objetivo

O "BMI Calculate App" é um projeto Ionic desenvolvido para calcular o Índice de Massa Corporal (IMC) de um usuário com base em seu peso e altura. Ele oferece uma interface simples e intuitiva para os usuários inserirem seus dados e receberem uma classificação imediata do seu IMC.

### Funcionalidades

  * **Cálculo de IMC**: Calcula o IMC usando a fórmula padrão.
  * **Classificação do IMC**: Categoriza o IMC calculado em diferentes classificações de saúde (por exemplo, "Muito Abaixo do Peso", "Abaixo do Peso", "Peso Normal", "Acima do Peso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III").
  * **Interface Amigável**: Construído com Ionic, oferecendo um design limpo e responsivo para vários dispositivos.
  * **Validação de Entrada**: Inclui uma função para validar e filtrar a entrada de altura, garantindo que apenas valores numéricos sejam processados.
  * **Estilização Dinâmica**: O cartão de resultado altera dinamicamente sua cor de fundo com base na classificação do IMC.

## 2\. Tecnologias Utilizadas

O projeto é construído utilizando as seguintes tecnologias chave:

  * **Angular**: Uma plataforma para construir aplicações web e móveis.
  * **Ionic Framework**: Um kit de ferramentas de UI de código aberto para construir aplicativos móveis e de desktop de alto desempenho e qualidade usando tecnologias web.
  * **TypeScript**: Um superconjunto de JavaScript que adiciona tipagem estática.
  * **Capacitor**: Um runtime nativo de código aberto para construir aplicativos web que rodam em iOS, Android, Electron e na web.
  * **SCSS**: Um pré-processador CSS utilizado para estilização.

## 3\. Começando

Para ter uma cópia local do projeto funcionando, siga estas instruções simples.

### Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

  * Node.js e npm (Node Package Manager)
  * Angular CLI: `npm install -g @angular/cli`
  * Ionic CLI: `npm install -g @ionic/cli`

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/devkauacarvalho/bmi-calculate.git
    cd bmi-calculate
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```

## 4\. Executando a Aplicação

### Servidor de Desenvolvimento

Para executar o aplicativo em um servidor de desenvolvimento:

```bash
ng serve
```

Navegue até `http://localhost:8100/` (ou a porta especificada no seu terminal). A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos fonte.

### Construindo para Produção

Para construir o projeto para produção:

```bash
ng build --configuration production
```

Os artefatos de construção serão armazenados no diretório `www/`.

### Executando Testes

Para executar os testes de unidade via Karma:

```bash
ng test
```

Para executar testes em um ambiente de integração contínua:

```bash
ng test --configuration ci
```

### Análise de Código (Linting)

Para executar as verificações de linting:

```bash
ng lint
```

Este comando verifica o estilo do código e possíveis erros conforme configurado em `.eslintrc.json`.

## 5\. Estrutura do Projeto

O projeto segue uma estrutura padrão de projeto Angular e Ionic:

```
bmi-calculate/
├── .angular/                 # Configurações específicas do Angular
├── .vscode/                  # Configurações do VS Code e extensões recomendadas
├── src/                      # Código fonte da aplicação
│   ├── app/                  # Componentes da aplicação, módulos e roteamento
│   │   ├── home/             # Página inicial (lógica de cálculo de IMC)
│   │   │   ├── home-routing.module.ts # Módulo de roteamento para a página home
│   │   │   ├── home.module.ts       # Módulo para a página home
│   │   │   ├── home.page.html       # Modelo HTML da página home
│   │   │   ├── home.page.scss       # Estilos SCSS específicos da página home
│   │   │   ├── home.page.spec.ts    # Arquivo de especificação de teste para a página home
│   │   │   └── home.page.ts         # Lógica TypeScript da página home
│   │   ├── app-routing.module.ts    # Módulo de roteamento principal da aplicação
│   │   ├── app.component.html       # Modelo HTML do componente raiz
│   │   ├── app.component.scss       # Estilos SCSS do componente raiz
│   │   ├── app.component.spec.ts    # Arquivo de especificação de teste para o componente raiz
│   │   └── app.component.ts         # Lógica TypeScript do componente raiz
│   │   └── app.module.ts            # Módulo raiz da aplicação
│   ├── assets/               # Ativos estáticos como imagens, ícones
│   ├── environments/         # Configurações de ambiente (produção, desenvolvimento)
│   ├── global.scss           # Estilos globais da aplicação
│   ├── index.html            # Arquivo HTML principal
│   ├── main.ts               # Ponto de entrada da aplicação
│   ├── polyfills.ts          # Polyfills para compatibilidade com navegadores
│   ├── test.ts               # Ponto de entrada para os testes
│   └── theme/                # Definições de tema e variáveis Ionic
├── angular.json              # Arquivo de configuração do Angular CLI
├── capacitor.config.json     # Configurações do Capacitor
├── ionic.config.json         # Configurações do Ionic
├── karma.conf.js             # Configuração do Karma (para testes de unidade)
├── package.json              # Metadados do projeto e dependências
├── package-lock.json         # Dependências do projeto (lockfile)
└── tsconfig.json             # Configuração do TypeScript
└── tsconfig.app.json         # Configuração do TypeScript para a aplicação
└── tsconfig.spec.json        # Configuração do TypeScript para os testes
└── .eslintrc.json            # Configuração do ESLint
└── .gitignore                # Arquivo que lista os arquivos e diretórios a serem ignorados pelo Git
```

## 6. Estilização

O projeto utiliza SCSS para a estilização, com variáveis globais definidas em `src/theme/variables.scss` e estilos específicos de componentes em seus respectivos arquivos `.scss` (por exemplo, `src/app/home/home.page.scss`).

A página de cálculo de IMC possui estilos para:
* Fundo da página (`ion-content`).
* Título (`ion-title`).
* Campos de entrada (`ion-input`).
* Botão de cálculo (`ion-button`).
* Cartão de resultado (`ion-card` e `ion-card-content`).

As cores de fundo do cartão de resultado são alteradas dinamicamente com base na classificação do IMC, utilizando as seguintes classes SCSS:
* `.obesidade`: `#ff6347`
* `.acima-do-peso`: `#ffaa00`
* `.peso-normal`: `#00b22a`
* `.abaixo-do-peso`: `#add8e6`
* `.muito-abaixo-do-peso`: `#a9a9a9`

## 7. Contribuição

Contribuições são bem-vindas! Siga estas etapas:
1.  Fork o repositório.
2.  Crie uma nova branch (`git checkout -b feature/AmazingFeature`).
3.  Faça suas alterações e commit (`git commit -m 'Add some AmazingFeature'`).
4.  Envie para a branch (`git push origin feature/AmazingFeature`).
5.  Abra um Pull Request.

## 8. Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` (se presente no repositório original) para obter mais detalhes.
>>>>>>> 0a6a098 (Criação de uma documentação adequada para o projeto.)
