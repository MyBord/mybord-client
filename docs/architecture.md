# Architecture Guide

This summarizes the general architecture behind the MyBord codebase.

## Table of Contents

* [I. Root](#i-root)   
* [II. src Folder](#ii-src-folder)
* [II. app Folder](#iii-app-folder)

## I. Root

The following architecture details are concerned with what should be contained in the *app* folder.
It is assumed that the general repo of the codebase will look something like this:
```
  .circleci/
    |- config.yml
  .storybook/  
  dist/
  docs/
  etc/
    |- toDo.md
    |- prToDo.md
  node_modules/
  src/
  .babelrc
  .eslintrc.js
  .gitignore
  package.json
  postcss.config.js
  README.md
  setupJest.js
  tsconfig.json
  typings.d.ts
  webpack.common.js
  webpack.dev.js
  webpack.prod.js
  yarn.lock
```

* **`.circleci/config.yml`:**
  * config file to run Circle CI.
* **.storybook:**
  * config files to run storybook.
* **dist/:**
  * folder that contains the app build.
* **docs/:**
  * folder that contains the app documentation.
* **`etc/toDo.md`:**
  * a space to put notes regarding the application in general.
* **`etc/prToDo.md`:**
  * a space to put notes regarding a current branch / pr.
* **`node_modules`:**
  * folder that holds all npm packages. should be git ignored.
* **src/:**
  * folder that contains the application source code.
* **`.babelrc`:**
  * babel configs.
* **`.eslintrc.js`:**
  * eslint configs.
* **`.gitignore`:**
  * configuration list of git ignores.
* **`package.json`:**
  * MyBord's package manager and metadata.
* **`postcss.config.js`:**
  * config file for PostCSS.
* **`README.md`:**
  * MyBord's root readme document.
* **`setupJest.js`:**
  * configures jest.
* **`tsconfig.json`:**
  * Specifies how TypeScript should be compiled.
* **`typings.d.ts`:**
  * Allows us to add global custom typings.
* **`webpack.common.js`:**
  * universal webpack configs.
* **`webpack.dev.js`:**
  * webpack configs exclusive for dev builds.
* **`webpack.prod.js`:**
  * webpack configs exclusive for prod builds.
* **`yarn.lock`:**
  * yarn's package lock file.

## II. src folder
The app folder should be organized in the following fashion:

```
src/
  |- api/ 
  |- app/ 
  |- hooks/ 
  |- styles/ 
  |- thirdParty/ 
     |- lotty/ 
        |- lotties/ 
        |- lottiePlayer.tsx 
     |- storybook/ 
  |- types/ 
  |- index.html
  |- index.scss
  |- index.tsx
```

* **api:**
    * The api folder contains the http service related scripts that are used to connect to any and
    all api's used in the app.
* **app/:**
  * The folder that contains the react application source code.
* **app/:**
  * The folder that contains the react application source code.
* **hooks/:**
  * Folder containing custom hooks.
* **styles/:**
  * Contains all global styling. Note that styling dedicated to individual components should be
   stored in the components folders within the react folder.
* **thirdParty/:**
  * Javascript and react code used for integrating third party tooling such as Storybook.
* **thirdParty/lotty/:**
  * Folder containing [Lottie](https://airbnb.io/lottie/#/) code. Note this folder is named
   'lotty' and not 'lottie' so it's folder alias won't create conflicts.
* **thirdParty/lottie/lotties:**
  * Folder containing [Lottie](https://airbnb.io/lottie/#/) json files.
* **`thirdParty/lottie/lottiePlayer.tsx`:**
  * Utility component to play lottie file.
* **thirdParty/storybook/:**
  * Folder containing storybook code and universal tooling / wrapper.
* **types/:**
  * Folder containing types and interfaces used across the app.
* **`index.html`:**
  * root html file used for the app.
* **`index.scss`:**
  * The application's root stylesheet.
* **`index.tsx`:**
  * The executable javascript of the app.

## III. app folder

```
app/
  |- header/ 
  |- navigation/ 
  |- pages/ 
  |- routing/ 
  |- shared/ 
  |- spa.module.scss
  |- spa.test.tsx
  |- spa.tsx
```

* **header/:**
  * The react code used to compose the header in the top of the application.
* **navigation/:**
  * The react code used to compose the left hand navigation pane.
* **pages/:**
  * Source code and components for each page.
* **routing/:**
  * Contains code for how the application should be routed.
* **shared/:**
  * Components shared across the header, navigation, and / or pages.
* **`spa.moduel.scss`:**
  * Stylings for `spa.tsx`.
* **`spa.test.tsx`:**
  * Test script for the `spa.tsx`.
* **`spa.tsx`:**
  * Actual root, highest parent react component used to define the application. The 'SPA'.

# III. Additional Resources

Here are some additional resources regarding structuring a react / redux app:

* [redux.js.org: suggested code structure (official Redux recommendations)](https://redux.js.org/faq/code-structure)
* [reactjs.org: file structure recommendations (official React recommendations)](https://reactjs.org/docs/faq-structure.html)
* [Redux best practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e)
* [How to structure React applications](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/)
* [Structure your React-Redux project for scalability and maintainability](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7) 
* [Three rules for structuring Redux applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)
* [A better file structure for for React/Redux applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)
* [Organizing Large React Applications](http://engineering.kapost.com/2016/01/organizing-large-react-applications/)
