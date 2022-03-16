# React Native Template

# Base

**Table of Contents**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [How run project](#how-run-project)
- [Dependencies](#dependencies)
- [Structure Folder](#structure-folder)
- [Responsive styles](#responsive-styles)
- [Eslint and Prettier](#eslint-and-prettier)
  - [Format Code Action(optional)](#format-code-actionoptional)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How run project

- Install packages

```bash
yarn install
```

- Run metro server

```bash
yarn start
```

- Run android/ios app

```bash
# android
yarn android

# ios
yarn ios # or use xcode
```

## Dependencies

- [React Navigation](https://reactnavigation.org/)

## Structure Folder

```
src/
├── assets/
│   ├── fonts/ # App fonts
│   ├── icons/ # App icons
|   └── images/ # App images
├── components/ # Global Components
├── navigation/ # React Navigation files
├── styles/ # Global Styles
├── utils/ # Global utils
├── views/ # Views
└── App.jsx
```

## Responsive styles

```js
/**
 * Normalize Font Size respect to window width with the scale width:320
 * @param {number} size
 */
function normalizeFontSize(size) {
  ...
}

/**
 * Normalize px respect to window width with the scale width:420
 * @param {number, string} size
 */
function normalizePx(size) {
  ...
}

/**
 * Compute window width * p
 * @param {number} p - 0 < p <= 1
 */
function pWidth(p) {
  ...
}
/**
 * Compute window height * p
 * @param {number} p - 0 < p <= 1
 */
function pHeight(p) {
  ...
}
```

## Eslint and Prettier

For Vscode:

- Eslint: [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Prettier: [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Format Code Action(optional)

- Format Code Action(optional): [https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action)

* Configure Format Code Action:

  - Global
    - Open `settings.json` at vscode:
      - `F1` or `Ctrl` + `Shift` + `P` or `CMD` + `Shift` + `P`
      - Search: “open settings”
      - Select: “Open Settings **(JSON)”**
    - Paste the configuration:
      ```json
      "editor.formatOnSave": false,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.codeActionsOnSave": [
        "source.formatDocument",
        "source.fixAll.eslint"
      ]
      ```
  - Workspace (only for the project)
    - Make a dir: `.vscode`
    - Make a file into the dir: `settings.json`
    - Paste the previous configuration

* Set only for `javascript` and `React.js`

  ```json
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      "source.fixAll.eslint"
    ]
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      "source.fixAll.eslint"
    ]
  }
  ```
