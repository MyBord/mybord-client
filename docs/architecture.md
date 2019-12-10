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
  server/
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
  yarn.lock
```

* **`.circleci/config.yml`:**
  * config file to run Circle CI.
* **.storybook:**
  * config files to run storybook.
* **dist/:**
  * folder that contains the front-end application build / bundle.
* **docs/:**
  * folder that contains the app documentation.
* **`etc/toDo.md`:**
  * a space to put notes regarding the application in general.
* **`etc/prToDo.md`:**
  * a space to put notes regarding a current branch / pr.
* **`node_modules`:**
  * folder that holds all npm packages. should be git ignored.
* **server/:**
  * folder that contains the application server / back-end source code.
* **src/:**
  * folder that contains the application client-side / front-end source code.
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
* **`yarn.lock`:**
  * yarn's package lock file.

## II. src folder
The app folder should be organized in the following fashion:

```
src/
  |- assets/ 
  |- api/ 
  |- build/ 
  |- hooks/ 
  |- mockData/ 
  |- spa/ 
  |- static/ 
  |- styles/ 
  |- thirdParty/ 
     |- google/ 
     |- lotty/ 
        |- lotties/ 
        |- lottiePlayer.tsx 
     |- storybook/ 
  |- types/ 
  |- utils/ 
  |- index.html
  |- index.scss
  |- index.tsx
```

* **assets:**
    * Image assets used in the app.
* **api:**
    * The api folder contains the http service related scripts that are used to connect to any and
    all api's used in the app.
* **build/:**
  * Folder containing build configs aka webpack for our app.
* **hooks/:**
  * Folder containing custom hooks.
* **mockData/:**
  * Data to be re-used for things like tests, mock api's, storybooks, and more.
* **spa/:**
  * The folder that contains the react application source code.
* **static/:**
  * Contains static data that is often used for application configuration and dummy data.
* **styles/:**
  * Contains all global styling. Note that styling dedicated to individual components should be
   stored in the components folders within the react folder.
* **thirdParty/:**
  * Javascript and react code used for integrating third party tooling such as Storybook.
* **thirdParty/google/:**
  * Code used for interacting with the google api.
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
* **utils/:**
  * Folder containing utility functions.
* **`index.html`:**
  * root html file used for the app.
* **`index.scss`:**
  * The application's root stylesheet.
* **`index.tsx`:**
  * The executable javascript of the app.

## III. spa folder

```
spa/
  |- app/ 
     |- errorBoundary/
     |- initializeApp/
     |- pages/
     |- routing/
     |- shared/
  |- layout/ 
     |- header/
     |- navigation/
  |- spa.tsx
```

* **app/:**
  * The react application that lives inside of our layout / navigation frame.
* **app/errorBoundary/:**
  * Code used to handle react error boundaries in our application.
* **app/inititializeApp/:**
  * Code that is used to make sure the application is properly initialized before any
   functionality is accessed.
* **app/pages/:**
  * Source code and components for each page.
* **app/routing/:**
  * Contains code for how the application should be routed.
* **app/shared/:**
  * Components shared across the our application, e.g. buttons, typography, inputs, etc.
* **layout/:**
  * The frame of our application / it's navigation.
* **layout/header/:**
  * The react code used to compose the header in the top of the application.
* **layout/navigation/:**
  * The react code used to compose the left hand navigation pane.
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
