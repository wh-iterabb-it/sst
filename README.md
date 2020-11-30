# server-side-tools

a set of common tools for node, which are pretty trivial to bring into a new repo.

---

[![Dependency Status](https://img.shields.io/david/wh-iterabb-it/server-side-tools.svg?style=flat)](https://david-dm.org/wh-iterabb-it/server-side-tools#info=Dependencies)
[![devDependency Status](https://img.shields.io/david/dev/wh-iterabb-it/server-side-tools.svg?style=flat)](https://david-dm.org/BeauBouchard/server-side-tools#info=devDependencies)
[![codecov](https://codecov.io/gh/wh-iterabb-it/server-side-tools/branch/main/graph/badge.svg)](https://codecov.io/gh/wh-iterabb-it/server-side-tools)


## Installation

### Authenticating to GitHub Packages
You need an access tokeninstall packages in GitHub Packages. You can use a personal access token to authenticate with your username directly to GitHub Packages or the GitHub API. You must use a personal access token with the appropriate scopes to install packages in GitHub Packages. 

For more information, see ["About GitHub Packages."](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)

You can authenticate to GitHub Packages with npm by either editing your per-user ~/.npmrc file to include your personal access token or by logging in to npm on the command line using your username and personal access token.

To authenticate by adding your personal access token to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn't exist.

```json
//npm.pkg.github.com/:_authToken=TOKEN
```

Then you can install this in any node or javascript project.
Install from the command line:
```bash
$ npm install @wh-iterabb-it/sst@0.0.1
```
Install via package.json:
```bash
"@wh-iterabb-it/sst": "0.0.1"
```


## Features

* convert [usage](#convert-usage)
  * kelvinToFahrenheit
  * celsiusToFahrenheit
  * kelvinToCelsius
  * fahrenheitToCelsius
  * toNumber
* detect [usage](#detect-usage)
  * detectURL - uses regex to detect if a string contains a url
  * isURL - alias for detectURL
  * detectHostName - given a url string, it will return the hostname 
  * detectRootDomain - given a url string, it will return the hostname 
  * isBoolean - true for boolean
  * isFinite - true for finite int
  * isInteger - true for integer
  * isNull - true for null value
  * isString - true for string value
* format [usage](#format-usage)
  * toHHMMSS - turns an amount of seconds into `${days}:${hours}:${minutes}:${seconds}`
  * toHHMMSS - turns an amount of seconds into `${hours}:${minutes}:${seconds}`
  * formatMoney - this will return a string, formatted `$xxx,xxx,xxx.xx` for a given int
* fs

* logger - all of winston logger functions [usage](#logger-usage)

* sanitize - removes any white space or html/xml tags. [usage](#sanitize-usage)


## Usage

### Convert Usage

#### celsiusToFahrenheit / fahrenheitToCelsius

```javascript
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('server-side-tools').convert;
const { logger } = require('server-side-tools');

const freezing_celsius = 0;

const freezing_fahrenheit = celsiusToFahrenheit(freezing_celsius);

// 32
logger.info(freezing_fahrenheit);
```

#### kelvinToFahrenheit / kelvinToCelsius

```javascript
const { kelvinToFahrenheit, kelvinToCelsius } = require('server-side-tools').convert;

const freezingKelvin = 273.15;
const boilingKelvin =  373.15;

const boilingFahrenheit = kelvinToFahrenheit(boilingKelvin); // 212
const freezingFahrenheit = kelvinToFahrenheit(freezingKelvin); // 32

const boilingCelsius = kelvinToCelsius(boilingKelvin); // 100
const freezingCelsius = kelvinToCelsius(freezingKelvin); // 0
```



### Detect Usage
```javascript
const { toNumber } = require('server-side-tools').convert;
const { isNumber } = require('server-side-tools').detect;
```

#### isNumber
```javascript

let number = "123";
console.log(isNumber(number)); // false

number = toNumber(number);
// number === 123
console.log(isNumber(number)); // true
```
### Format Usage
```javascript
const { toHHMMSS, toDDHHMMSS, formatMoney } = require('server-side-tools').format;
```

#### toDDHHMMSS / toHHMMSS
```javascript
// the application uptime in seconds
const time = process.uptime();
// lets just say its 90066

console.log(`${toDDHHMMSS(time)}`);
// 01:01:01:06

console.log(`${toHHMMSS(time)}`);
// 25:01:06
```

#### formatMoney
```javascript
const ethereumPrice = 705726246.26999999;

console.log(formatMoney(ethereumPrice));
// $705,726,246.27
```

### Logger Usage

```javascript
const { logger } = require('server-side-tools');
// or
import { logger } from 'server-side-tools';

// all of winston logger functions
logger.info('test');
```

### Sanitize Usage

```javascript
const { sanitize } = require('server-side-tools');

const clean = sanitize('<br/> tacobell   <br/>');
// tacobell
```
