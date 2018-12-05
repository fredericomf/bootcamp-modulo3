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
