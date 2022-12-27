# Sample template made to shorten work on electron apps.

## This template is using this as base https://github.com/electron-react-boilerplate/electron-react-boilerplate

## This project is collection of few react elements inside electron base, which can be used to fasten your work.

## 1. How to start

### Install dependencies

```shell
npm install / yarn
```

### Prepare environment

```shell
npm run prepare / yarn prepare
chmod +x .husky/pre-commit
```

## 2. How to build

### Automated

```shell
make build
```

### Manual

```shell
npm run build / yarn build

npm run build:target / yarn build:target
```

### Available targets:

```text
windows
linux
mac
```

### You can also create build with debug

```shell
npm run build:debug / yarn build:debug

npm run build:target / yarn build:target
```

### You can find output files in /release/build

## 3. Useful information

### 3.1 Logs folder

#### Linux

```text
~/.cache/"package.json -> productName"/logs
```

#### Windows

```text
~/AppData/Roaming/"package.json -> productName"/logs
```

### 3.2 Electron only render

#### Currently, webpack is set to pack this project as 'electron only'. That means, you cannot render it as 'react app' in browser. If you want to do it, set webpack target to `['web', 'electron-renderer']` instead of `['electron-renderer']`. That way you won't be able to use native modules like fs. This project is bundled with winston to handle logs. Remember to remove it from usage.
