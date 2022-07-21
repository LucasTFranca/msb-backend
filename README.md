# MSB - BackEnd

MSB - back end é uma simples api, utilizando `nodejs` e `express`.

Com a api você pode adicionar users ao banco de dados, e ver os users adicionados.

## Requisitos

- Node js
- MongoDB
- Npm

## Tecnologias Utilizadas

- Node js
- Express
- Cors
- EsLint
- MongoDB


## Instalação

Primeiro clone o repositorio de back end utilizando o comando:

```bash
git clone git@github.com:LucasTFranca/msb-backend.git
cd msb-backend
```

Agora instale as dependencias do projeto:

```bash
npm install
```

## Configuração

Vá no arquivo `.env.example` e renomeei o nome dele para `.env`, depois abra o arquivo
e modifique o valor da chave `HOST` por esse url `mongodb://127.0.0.1:27017/file-storage`.

## Como Utilizar

Para começar a utilizar a api, digite o comando abaixo:

```bash
npm start
```

## Front End

Para instalar e utilizar o Front End, leia a documentação no link a seguir:

https://github.com/LucasTFranca/msb-frontend
