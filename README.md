# Live Style Guide

## Setup

```bash
git clone git@github.com:iunullc/fruit-rollup.git
npm install
npm link
```

move to your local luna-web directory and run:

```bash
npm link fruit-rollup
```

The above _npm-link_ commands simply generate a symlink in your global node_modules pointing at
 fruit-rollup and added a pointer in your local luna-web node_modules.


## Usage

fruit-rollup is included as a dependency to luna-web and is used like any other package.
To use a component from fruit-rollup just import it as named import.

```js
import { Foo } from 'fruit-rollup';
```


## Development

### New components

New components should be added in */src/components/<COMPONENT_NAME>/* and should have an 
associated test and styles file.

```
/lib
|
+--/src
  |
  +--/components
    |
    +--/SomeComponent
      |
      +--SomeComponent.jsx
      |
      +--SomeComponent.test.js
      |
      +--SomeComponent.styles.js
```

### Building

To see live changes you will need to rebuild after making changes and restart the server:

```bash
npm run build:examples
npm start
```

## Deployment

We have not yet published this app to NPM, but will be shortly.

That process will likely end up looking like this:

```bash
npm run build
npm publish
```

We will need to make sure we have the proper semantic versioning in luna-web.


## To-Dos

- Publish to NPM
