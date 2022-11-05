# How To Do

This `How To Do` assumes you have already configured the environment setup for React Native

[https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

## Instructions

1.- Create a new React Native Project

```bash
npx react-native init AwesomeProject
# Run yarn install if it was not run with project creation. 
# Same with pod install for ios
```

2.- Delete the file `App.js` and copy the folder [src](./files/src) in the root project.

3.- Edit the file `index.js`. Import correctly `App` from `src/App`.

4.- Edit the `metro.config.js`. Add the following resolver:

```js
module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'],
  },
  transformer: {
    ...
  },
}
```

5.- Install [React Navigation](https://reactnavigation.org/docs/getting-started)

```bash
yarn add @react-navigation/native react-native-safe-area-context react-native-screens @react-navigation/native-stack
```

6.- At this point you can run the application and verify that everything is ok.

7.- Install eslint y prettier and copy the files `.eslintrc.js` and `.prettierrc.js`

```bash
yarn add -D eslint @react-native-community/eslint-config eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise prettier eslint-config-prettier eslint-plugin-prettier
```

8.- Finally, I strongly recommend setting the version of all packages without the '^' and using the latest available versions of all of them. Remember to run yarn install (and pod install for ios) and check everything works fine.
