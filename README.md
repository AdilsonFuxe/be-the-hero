
<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="docs/logo.png" alt="Logo" width="80" height="80">

  <h3 align="center">Be The Hero</h3>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)



<!-- ABOUT THE PROJECT -->
## About The Project

Aplicação para doação em ONGs desenvolvida na semana OmniStack 11 da Rocketseat.

### Built With

* [NodeJs](https://nodejs.org/)
* [ReactJS](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Postgresql](https://www.mongodb.com/)
* [Knext Query Builder](https://mongoosejs.com/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
para obter o npm https://www.npmjs.com/get-npm

### Installation

1. Clone the repo
```sh
git clone https://github.com/AdilsonFuxe/be-the-hero.git
```
2. Configuração do servidor
 
Entre dentro da pasta backend
```sh
    cd backend
```
dentro da pasta backend rode o seguinte comanddo para instalar todas as dependencias

```sh
npm install
```
ou
```sh
yarn install
```
para rodar o servidor execute o camando
```sh
npm run start
```
ou
```sh
yarn start
```

o servidor vai rodar dentro em `http://localhost:3333`

3. Configuracao do front-end web

Entre dentro da pasta fronted
```sh
    cd fronted
```
dentro da pasta fronted rode o seguinte comanddo para instalar todas as dependencias

```sh
npm install
```
ou
```sh
yarn install
```
entre dentro da pasta `web/src/service/api.js` adicione seu ip local em

```JS
const api = axios.create({
    baseURL: 'http://seuip:3333'
});

```
para rodar o projecto execute
```sh
npm start
```
ou
```sh
yarn start
```

o servidor vai rodar em `http://localhost:3000`

4. Configuracao do front-end mobile

Entre dentro da pasta mobile
```sh
    cd mobile
```
dentro da pasta mobile rode o seguinte comanddo para instalar todas as dependencias

```sh
npm install
```
ou
```sh
yarn install
```
entre dentro da pasta `mobile/src/service/api.js` adicione seu ip local em

```JS
const api = axios.create({
    baseURL: 'http://seuip:3333'
});

```
para rodar o projecto execute
```sh
yarn start
```
ou
```sh
expo start
```

<!-- USAGE EXAMPLES -->
## Usage

[![Product Name Screen Shot][product-screenshot-web]](https://example.com)


<!-- CONTACT
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

 -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot-web]: docs/web.png
