<img align="right" width="280" height="230" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/build.jpg">

# Build

This summarizes the build process for the MyBord codebase as well as any other config files.

## Table of Contents:

* [I. Babel](#i-babel)
* [II. ESLint](#ii-eslint)
* [III. Importing](#iii-importing)
* [IV. Testing and Jest](#iv-testing-and-jest)
* [V. Yarn](#v-yarn)
* [VI. Yarn](#vi-env-vars)

## I. Babel

### A. Summary

Babel is a javascript compiler. Its configs can be found at
[.babelrc](https://github.com/jimmy-e/mybord/blob/master/.babelrc).

* [Documentation](https://babeljs.io/docs/en/)
* [Source Code](https://github.com/babel/babel)
* [Browserslist integration](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration)

Note: for babel preset-env, declaring `"useBuiltIns": true` tells babel to handle polyfills; 
[Further documentation](https://babeljs.io/docs/en/babel-preset-env#usebuiltins).

### B. Presets

#### i. @babel/preset-react

@babel/preset-react is Babel's preset for all React plugins.

* [Source Code](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
* [Documentation](https://babeljs.io/docs/en/babel-preset-react)

#### i. @babel/preset-env

"@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to
micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target
environment(s). This both makes your life easier and JavaScript bundles smaller!"

* [Source Code](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
* [Documentation](https://babeljs.io/docs/en/babel-preset-env)
* [@babel/preset-env is needed to use jest](https://jestjs.io/docs/en/getting-started#using-babel)
* [make sure to add target nodes current](https://github.com/facebook/jest/issues/3126)

### C. Plugins

* [babel-plugin-transform-builtin-extend plugin](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend).
    * We are currently using the babel-plugin-transform-builtin-extend plugin because ["Babel can
    handle Custom Error Class methods, but only when they are declared with Object.defineProperty().
    Otherwise, Babel and other transpilers will not correctly handle the following code without 
    additional configuration."](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types).
    See this [stack overflow](https://stackoverflow.com/a/43595019/7460467) answer for more details.

* [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
    * "A Babel plugin to add a new resolver for your modules when compiling your code using Babel. 
       This plugin allows you to add new "root" directories that contain your modules. It also 
       allows you to setup a custom alias for directories, specific files, or even other npm 
       modules."

## II. Eslint

### A. Summary

Eslint is used to lint our javascript and TypeScript code. It's config file in the root 
directory, [`.eslintrc.js`](https://github.com/jimmy-e/mybord/blob/master/.eslintrc.js),
sets up our syntax rules, importing rules, and use of global variables.

By principle, MyBord is set to follow [AirBnB's Javascript Style Guide](https://github.com/airbnb/javascript) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).
This means that that our `.eslintrc` should not have any other custom eslint rules unless 
completely necessary.

The following outlines how exactly our `.eslintrc` is configured.

### B. env

This allows us to whitelist certain environment variables.

* `'jest/globals': true`: whitelists all jest environment variables.

### C. extends

This specifies our linting configurations.

### D. globals

This declares the global variables that are accessible to our scripts.

### E. overrides

We use [eslint's overrides property](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files)
to disable rules for a specific set of files. Those overrides are:

* turning off the `react/prop-types` rule for all `.tsx` files since we do not need to use react 
prop-type validation, given we are using typescript.

### F. parser

We use the `babel-eslint` parser, a wrapper around the Babel parser that makes it compatible with
ESLint.

* [babel-eslint source code](https://github.com/babel/babel-eslint)

### G. parser options

* `ecmaFeatures: { jsx: true }`: [Enables JSX](https://eslint.org/docs/user-guide/configuring#specifying-parser-options).
* `project: './tsconfig.json'`: Tells ESLint to read our TypeScript configuration file.

### H. plugins

* @typescript-eslint: Plugin for TypeScript
* jest: Plugin for jest

### I. rules

Here are the current eslint rules / exceptions and why these exceptions are being made:

* `'import/no-extraneous-dependencies': ['error', {'devDependencies': ... }]`
    * This exception is made so that ESLint does not think that we are trying to use dependencies
     that should ultimately be dependencies and not devDepenencies in certain file types.
* `'@typescript-eslint/camelcase': ['error', { 'properties': 'never' }]`
    * Because we are often handling many fields from the back-end that are not in camelCase 
    form, we have decided to turn this rule off.
* `'indent': 'off'`
    * We are turning the main indent linting rule off in favor of the `@typescript-eslint/indent`
     rule.
* `'@typescript-eslint/indent': ['error', 2, {'ignoredNodes': ['JSXElement'], 'SwitchCase': 1, }]`
    * We are having TypeScript-eslint inspect indentations for 2 space indentations.
    * We are enforcing a 1 level indentation for `cause` clauses in `switch` statements.
    * We ignore the indentation of JSX Elements. You can see [this issue](https://github.com/yannickcr/eslint-plugin-react/issues/915)
    for further details.
* `'@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true, 'allowTypedFunctionExpressions': true }]`
    * Please see [this issue](https://github.com/typescript-eslint/typescript-eslint/issues/493) 
    for why this rule is set the way it is.
* `'semi': 'off'`
    * We are turning the main indent linting rule off in favor of the `@typescript-eslint/semi`
     rule.
* `'@typescript-eslint/semi': ['error']`
    * This rule extends the base eslint/semi rule, which is why we turn it off (see above).
    * We are having @typescript-eslint enforce the use of semicolons.
    * You can see [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md)
    for further details.
* `'react/destructuring-assignment': [false, 'always', { 'ignoreClassFields': true }]`
    * This exception is made so we can use `this` in our class field declarations.
    * [See here](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md#ignoreclassfields).
* `'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }]`
    * This exception is made so we can make enable jsx code to be used in `.tsx` files.

### J. settings

* import/extensions: Lists file extensions to be parsed.
* import/resolver: Points to webpack for aliased import configs.

## III. Importing

Although not related to a specific build process (e.g. Webpack, Babel, Yarn, etc), importing is 
important to outline here because it touches upon many of our build configurations (Webpack, 
Eslint, and Babel).

Our MyBord codebase has implemented aliased importing so that importing in our scripts 1. do not 
need to snake across the source tree, and 2. so that if scripts are moved up and down the tree, 
no issues arise.

```js
// what we want
import SampleButton from 'buttons/sampleButton';
import HomePage from 'pages/homePage';

// what we don't want
import SampleButton from '../../../buttons/sampleButton';
import HomePage from '../../../pages/homePage';
```

In order to accomplish this, we must do the following:
A. Implement aliasing in Webpack
B. Implement aliasing in Eslint
C. Implement aliasing in Babel
D. Implement aliasing in Jest

### A. Implementing aliasing in Webpack
We need to implement import aliasing in Webpack so that our Webpack build knows how to resolve these
imports. We can do this by utilizing the resolve configuration, outlined [here](https://webpack.js.org/configuration/resolve/).

For example:

```javascript
module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      buttons: path.resolve(__dirname, 'src/app/shared/buttons/'),
      pages: path.resolve(__dirname, 'src/app/pages/'),
    }
  },
};
```

If you are using Webstorm, and want your aliases to be recognized by Webstorm
for static checking and completion features, you will need to make sure that Webstorm is set to 
read the current Webpack configs. You can do this in Webstorm by declaring `webpack.dev.js` as 
the Webpack configuration file, as outlined [here](https://stackoverflow.com/questions/34943631/path-aliases-for-imports-in-webstorm/45914938#45914938).

You can find further documentation about this [here](https://blog.jetbrains.com/webstorm/2017/06/webstorm-2017-2-eap-172-2827/).

Because we want Webstorm to use our webpack alias configs, make sure your alias paths look like
this: 

`actions: path.resolve(__dirname, 'src/app/shared/buttons/'),` 

and not this:

`actions: path.resolve(__dirname, './src/app/shared/buttons/'),`

Note: our webpack aliasing also includes the following alias:

`styles: path.resolve(__dirname, 'src/app/styles/'),`

This allows our stylesheets to use aliased imported. For example:

**sample.less:**
```css
@import "~styles/_colors";

.div {
  display: flex;
  justify-content: center;
}
```
 
### B. Implementing aliasing in Eslint
Make sure to use `eslint-import-resolver-webpack` to tell eslint how to use webpack's alias configs.

### C. Implementing aliasing in Babel
"Our tests do not go through Webpack transformation and therefore will not recognize the absolute
path aliases if we have configured this in Webpack only.

Since Jest tests go through Babel for transpile, we can use a babel module resolver to resolve the
relative directives into absolute paths."

[- Sherry Hsu](https://medium.com/@sherryhsu/how-to-change-relative-paths-to-absolute-paths-for-imports-32ba6cce18a5)

We can do this by using the `babel-plugin-module-resolver` plugin. For example:

```json
{
  ...,
  "plugins": [
    ...,
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "buttons": "./src/app/shared/buttons/",
        "pages": "./src/app/pages/",
      }
    }]
  ]
}
```

Again, note that the exact same aliases declared in the Webpack and Eslint configs must be 
declared in the Babelrc configs.

### D. Implementing aliasing in Jest
In order to implement aliased importing for when we run our jest tests, we have to add some 
configurations to our jest build, as mentioned in [this article](https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9).

```js
module.exports = {
  moduleNameMapper: {
    "^buttons(.*)$": "<rootDir>/src/app/shared/buttons$1",
    "^pages(.*)$": "<rootDir>/src/app/pages$1",
  },
};
```

### E. Implementing aliasing in Typescript
In order to implement aliased importing when using Typescript, we need to add our aliases to our 
`tsconfig.json`, as noted [here](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping).

```json
{
  "compilerOptions": {
    //...
    "paths": {
      "buttons/*": ["src/app/shared/buttons/*"],
      "pages/*": ["src/app/pages/*"],
    }
  }
}
```

### E. Additional Resources

* [How to manually add a path to be resolved in eslintrc](https://stackoverflow.com/a/50015693/7460467)
* [How to change relative paths to absolute paths for imports](https://medium.com/@sherryhsu/how-to-change-relative-paths-to-absolute-paths-for-imports-32ba6cce18a5)
* [Path aliases for imports in WebStorm](https://stackoverflow.com/questions/34943631/path-aliases-for-imports-in-webstorm)
* [Support for webpack enhanced module resolution](https://blog.jetbrains.com/webstorm/2017/06/webstorm-2017-2-eap-172-2827/)
* [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
* [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias)
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [Webpack resolve configation](https://webpack.js.org/configuration/resolve/).

## IV. Testing and Jest

`package.json` is configured to run jest by running the command `yarn test`. If you want to watch
your test files, you can use the command `jest --watch`.

### B. `jest.config.js`

`jest.config.js` is stored in the root of the directory and is the jest configuration file. You 
can see more details [here](https://jestjs.io/docs/en/configuration).

It currently does the following:

* Silencing an unnecessary ts-jest warning, as mentioned [here](https://github.com/kulshekhar/ts-jest/issues/748).
* Declares that js, jsx, ts and tsx file extensions should be used / looked for.
* Declares that the `node_modules` directory should be searched recursively up from the requiring
module's location.
* Creates an aliased imports for jest.
* Runs the `setupTests.js` script before each test.
* Uses the `ts-jest` TypeScript preprocessor so that jest can test projects written in typescript.
* Uses `babel-jest` to transform `.jsx` test files and uses `ts-jest` to transform `.tsx` test 
files.

### B. `setupTests.js`

`setupTests.js` is stored in the root of the directory and runs every time jest is run. It does 
the following:

* Creates a new enzyme adapter.

## V. Yarn

### A. Yarn Commands

  * `test`
    * run all tests for the application.
  * `storybook`
    * run a local storybook.
  * `build-storybook`
    * build a storybook bundle.
  * `remove-dist`
    * remove the `dist` folder.
  * `copy-index`
    * copy the source `index.html` file to the `dist` folder.
  * `webpack:dev`
    * run webpack with the dev configurations.
  * `webpack:prod`
    * run webpack with the prod configurations.
  * `start`
    * run a local version of the application.
  * `build:dev`
    * build a dev build of the application.
  * `build:prod`
    * build a prod build of the application.
    
## VI. Env Vars

The following are the env vars needed to run our front end application: 

* **`URI`**:
  * The uri endpoint that is used to communicate with our backend server.
