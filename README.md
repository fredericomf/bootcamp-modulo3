# bootcamp-modulo3

3th Module - Rocketseat Node Bootcamp Course

Lessons of Bootcamp Module 3

```bash
echo "# bootcamp-modulo3" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fredericomf/bootcamp-modulo3.git
git push -u origin master
```

# Iniciando o projeto

## Comandos

Para iniciar um projeto nodejs devemos rodar, na pasta do projeto, o comando:

```bash
yarn init -y
```

_Note que a opção -y serve para aceitar os valores padrões de inicialização do projeto_

Após instalar o 'nodemon', devemos adicionar os scripts no package.json:

```javascript
"scripts" : {
    "start": "nodemon index.js"
}
```

_Lembrando que o nodemon deve ser instalado como DEVELOPMENT MODE (yarn add nodemon -D)_

# Dependências utilizadas

## NODEMON

Monitora alterações no código fonte e atualiza o servidor.

Para saber mais: https://nodemon.io

_Lembrando que o nodemon deve ser instalado como DEVELOPMENT MODE (yarn add nodemon -D)_

## EXPRESS

Framework web rápido, flexível e minimalista para Node.js.

Para saber mais: https://expressjs.com/pt-br/

## ESLINT

Serve para garantir que todos os programadores envolvidos no projeto utilizem uma mesma guia de estilos.

Para saber mais: https://eslint.org

_Lembrando que o eslint deve ser instalado como DEVELOPMENT MODE (yarn add nodemon -D)_

_NOTA: Depois de instalador não esquecer de rodar o comando:_

```bash
npx eslint --init
```

How would you like to configure ESLint?
\> Use a popular style guide

Witch style guide do you want to follow?
\> Standard (https://github.com/standard/standard)

What format do you want your config file to be in?
\> JSON

Would you like to install them now with npm?
\> Y

**_DEPOIS, APAGAR O ARQUIVO 'package-lock.json' E RODAR O COMANDO YARN NA RAIZ DO PROJETO. ISSO GARANTE USAR SÓ O YARN_**

_NOTA: Ao retornarmos para um arquivo .js notaremos que os erros na nossa styleguide são marcados com linhas vermelhas (Isso depois de instalada a extenção do ESLint_

## BCRYPTJS

Serve para fazer criptografia.

Para saber mais: https://www.npmjs.com/package/bcryptjs

```bash
yarn add bcryptjs
```

_NOTA: Um exemplo de uso pode ser encontrado no MODEL USER_

## DEPENDÊNCIA ORM MONGODB = MONGOOSE

Dependência ORM para trabalhar com MongoDB

Para saber mais: https://mongoosejs.com

```bash
yarn add mongoose
```

## JSON WEB TOKEN

Para criar os tokens de autenticação e validar.

Para saber mais: https://www.npmjs.com/package/jsonwebtoken

```bash
yarn add jsonwebtoken
```

_NOTA: Um exemplo de uso pode ser encontrado no MODEL USER_

## REQUIRE DIR

Para retornar todos os arquivos e subpastas de um diretório requerido.

Para saber mais: https://www.npmjs.com/package/require-dir

```bash
yarn add require-dir
```

_NOTA: Um exemplo de uso pode ser encontrado no index.js da pasta CONTROLLERS_

## MONGOOSE PAGINATE

Para auxiliar na implementação de paginação de resultados

Para saber mais: https://github.com/edwardhotchkiss/mongoose-paginate

```bash
yarn add mongoose-paginate
```

_NOTA: Um exemplo de uso pode ser encontrado no model de anúncios "Ad" na pasta "MODELS". Também é configurado no CONTROLLER "AdController" const ads = await Ad.paginate() [antes era Ad.find()]_

## NODEMAILER

É um módulo para o Node.js para facilitar o envio de e-mails

Para saber mais: https://nodemailer.com/about/

```bash
yarn add nodemailer
```

_NOTA: Um exemplo de uso pode ser encontrado '/src/app/services/Mail.js'_

## NODEMAILER EXPRESS HANDLEBARS

É um plugin para o nodemailer que utiliza o mecanismo HANDLEBARS para formatar e-mails HTML

Para saber mais: https://www.npmjs.com/package/nodemailer-express-handlebars

```bash
yarn add nodemailer-express-handlebars
```

_NOTA: Um exemplo de uso pode ser encontrado '/src/app/services/Mail.js'_

## EXPRESS HANDLEBARS

É um mecanismo de renderização similar ao Nunjucks

Para saber mais: https://www.npmjs.com/package/express-handlebars

```bash
yarn add express-handlebars
```

_NOTA: Um exemplo de uso pode ser encontrado '/src/app/services/Mail.js'_

## KUE

Funcionalidade de fila com back usando REDIS (vide abaixo a instalação do REDIS)

Para saber mais: https://automattic.github.io/kue/

```bash
yarn add kue
```

_NOTA: Um exemplo de uso pode ser encontrado '/src/app/services/Mail.js'_

## JOI

Para fazer a validação de objetos javascript

Para saber mais: https://www.npmjs.com/package/joi

```bash
yarn add joi
```

_NOTA: Um exemplo de uso pode ser encontrado nas classes: '/src/app/validators'_

## EXPRESS VALIDATION

É um middleware que valida o body, params, query, headers e cookier de uma requisição

Para saber mais: https://www.npmjs.com/package/express-validation

```bash
yarn add express-validation
```

_NOTA: Um exemplo de uso pode ser encontrado nas classes: '/src/app/validators'_

## YOUCH

É um formatador de erros

Para saber mais: https://www.npmjs.com/package/youch

```bash
yarn add youch
```

_NOTA: Um exemplo de uso pode ser encontrado em: '/src/server.js'_

## EXPRESS ASYNC HANDLER

Para conseguirmos enviar os erros que acontecem dentro das PROMISSES para o nosso exception handler

Para saber mais: https://www.npmjs.com/package/express-async-handler

```bash
yarn add express-async-handler
```

_NOTA: Um exemplo de uso pode ser encontrado em: '/src/routes.js'_

## SENTRY

Rastreador de erros em tempo real (para produção)

Para saber mais: https://www.sentry.io

```bash
yarn add @sentry/node
```

_NOTA: Um exemplo de uso pode ser encontrado em: '/src/server.js' ou '/src/app/services/Queue.js'_

## DOTENV

Para carregar variáveis de ambiente

Para saber mais: https://www.npmjs.com/package/dotenv

```bash
yarn add dotenv
```

_NOTA: Um exemplo de uso pode ser encontrado em: '/src/server.js'_

# PLUGINS

# Extenções VSCODE utilizadas

## EDITOR CONFIG

Uma extenção que serve para padronizar a formatação de códigos fontes.

EditorConfig for VSCode. (EditorConfig)

Depois de instalada a extenção, criar um arquivo '.editorconfig' na raiz do projeto com o seguinte conteúdo:

```javascript
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## ESLINT

Integrates ESLint Javascript into VS Code. (Dirk Baeumer)

Serve para garantir que todos os programadores envolvidos no projeto utilizem uma mesma guia de estilos.

_NOTA: Abrir o user settings (JSON) 'Ctrl + Shift + P' > setting > Preferences: Open Settings (JSON):_

Adicionar:

**"prettier.eslintIntegration": true,**
**"editor.formatOnSave": true,**

_Com isso, toda vez que salvarmos um arquivo ele formatará seguindo o styleguide definido na inicialização do ESLint _

[Vide dependências](#Dependências-utilizadas)

## PRETTIER

A VS Code plugin for prettier/prettier. (Esben Petersen)

Automatiza algumas formatações do ESLINT

# Banco de dados

## MONGO DB

Banco mais utilizado em sistemas onde as tabelas tiverem poucos relacionamentos entre si.

### Instalar o Docker

_O Docker é uma aplicação que torna simples e fácil executar processos de aplicação em um contêiner, que é como uma máquina virtual, apenas mais portátil, mais amigável, e mais dependente do sistema operacional do host._ [TUTORIAL INSTALAÇÃO DOCKER](https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-16-04-pt)

Depois, rodar o comando:

```bash
sudo docker run --name mongonode -p 27017:27017 -d -t mongo
```

_NOTA: o '-p 27017:27017' serve para redirecionar a porta 27017 do docker container para a posta 27017 da nossa máquina. Assim podemos acessar o banco por essa porta_

- Depois de instalado podemos roadar o seguinte comando para ver os servidores que estão rodando:

```bash
sudo docker ps
```

## REDIS

Banco de dados NoSQL (considerado um dos mais performáticos do mercado atual 2018). Este banco será utilizado para o tratamento de FILAS do nosso sistema (e-mail a princípio)

```bash
sudo docker run --name noderedis -p 6379:6379 -d -t redis:alpine
```

- Depois de instalado podemos roadar o seguinte comando para ver os servidores que estão rodando:

```bash
sudo docker ps
```
