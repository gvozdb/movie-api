# movie-api

[![Build Status](https://img.shields.io/travis/anvilabs/movie-api.svg)](https://travis-ci.org/anvilabs/movie-api)
[![Coverage Status](https://img.shields.io/codecov/c/github/anvilabs/movie-api.svg)](https://codecov.io/gh/anvilabs/movie-api)
[![Dependency Status](https://img.shields.io/david/anvilabs/movie-api.svg)](https://david-dm.org/anvilabs/movie-api)
[![devDependency Status](https://img.shields.io/david/dev/anvilabs/movie-api.svg)](https://david-dm.org/anvilabs/movie-api?type=dev)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

🚧 WIP

## Installation

```bash
yarn add movie-api # npm install movie-api --save
```

## Usage

```js
import { Kinopoisk } from 'movie-api';

const kp = new Kinopoisk();

kp.getId({ title: 'Звёздные войны: Пробуждение силы' }).then((id) => {
  console.log(id); // 714888
});

kp.getInfo(714888, `{
  kpId
  title
  synopsis
}`).then((info) => {
  console.log(info);
  // {
  //   kpId: 714888,
  //   title: 'Звёздные войны: Пробуждение силы',
  //   synopsis: 'Через тридцать лет после гибели Дарта Вейдера и Императора галактика по-прежнему в опасности. Государственное образование Первый Орден во главе с таинственным верховным лидером Сноуком и его правой рукой Кайло Реном идёт по стопам Империи, пытаясь захватить всю власть. В это нелёгкое время судьба сводит юную девушку Рей и бывшего штурмовика Первого Ордена Финна с героями войны с Империей - Ханом Соло, Чубаккой и генералом Леей. Вместе они должны дать бой Первому Ордену, однако настаёт тот момент, когда становится очевидно, что лишь джедаи могут остановить Сноука и Кайло Рена.'
  // }
});
```

Proper docs coming soon.

## License

[MIT License](./LICENSE) © Anvilabs LLC
