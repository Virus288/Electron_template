# Sample template made to shorten work on electron apps.

## This template is using this as base https://github.com/electron-react-boilerplate/electron-react-boilerplate

## This project is collection of few react elements inside electron base, which can be used to fasten your work

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

## 3. Useful information

### Logs folder

#### Linux

```text
~/.cache/package.json -> productName/logs
```

#### Windows

```text
~/AppData/Roaming/package.json -> productName/logs
```
