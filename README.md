# Pointless Utils

Some pointless utils built with TypeScript, for experimentation purposes. Generated JavaScript is packaged into UMD modules.

## Install

This project requires [Gulp](http://gulpjs.com/) to be installed globally on your machine.

We are not currently on npm. Add the following to your package.json `dependencies`:

```
"pointless-utils": "git+ssh://git@github.com/SiAdcock/pointless-utils.git"
```

Then run:

```
$ npm install
```

## Import

### TypeScript

```
/// <reference path="node_modules/pointless-utils/typings/index.d.ts" />

import _ = require('pointless-utils');
```

### JavaScript

```javascript
const _ = require('pointless-utils');
```

## Usage

```javascript
_.shoutify('hello'); // HELLO!!!1111one1one!
_.addNoodles({name: 'Bob'}; // { name: 'Bob', food: 'noodles' }
```

## Contribute
Please feel free to add more pointless utils. Contribution guidelines:

1. All code must initially written in TypeScript
2. One util function per file
3. Try to categorise utils using a sensible directory structure (e.g. array utils might appear under an `array` directory)
4. All utils should also be exposed in `index.ts`
5. Transpile to JavaScript and generate `.d.ts` files using `npm run build`
6. Check in all generated files

## Issues
Please raise any issues you find. Also, let me know if there is a better way of distributing TypeScript libraries!
