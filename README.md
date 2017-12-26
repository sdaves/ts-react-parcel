# Typescript + React + Parcel = ❤️ 

This repository has basic settings for buildling react application in Typescript.

The original source code of the provided example is [here](https://github.com/kentcdodds/advanced-react-patterns/blob/master/14-use-control-props/index.html).

## Built in settings

- React + ReactDOM (ver.16)
- Typescript (with TSLint setting)
- Prettier + tslint-config-prettier
- Test configuration using Jest + Enzyme
- Parcel bundler

## How to set up the project

```
git clone https://github.com/sdaves/ts-react-parcel && cd ts-react-parcel && npm i
```

## How to start development for the application

    npm start

Execute the command and you can run & test the application on `localhost:1234` in the browser.

## How to build the application

    npm run build

The default output directory is `/dist`. You can change the destination wherever you want.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'" <- Change here
}
// ...
```

## How to test the application

    npm run test        # run test once
    npm run test:watch  # watch mode

Test file's name should be `SOURCE.test.ts/tsx/js` or `SOURCE.spec.ts/tsx/js`.
