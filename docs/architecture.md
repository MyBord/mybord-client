# Architecture Guide

This summarizes the general architecture behind the MyBord codebase.

## Table of Contents

* [I. Root](#i-root)   
* [II. src Folder](#ii-src-folder)
* [III. server Folder](#iii-server-folder)
* [IV. third party Folder](#iv-third-party-folder)
* [V. spa folder](#v-spa-folder)
* [V. app folder](#vi-app-folder)
* [V. landing folder](#vii-landing-folder)

## I. Root

The following architecture details are concerned with what should be contained in the root of the
application folder.

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
  .jest.config.js
  package.json
  postcss.config.js
  README.md
  setupTests.js
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
  * config files and configuration to run storybook.
* **dist/:**
  * folder that contains the app build.
* **docs/:**
  * folder that contains the app documentation.
* **`etc/toDo.md`:**
  * a space to put notes regarding the application in general and project management.
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
* **`.jest.config.js`:**
  * jest configs.
* **`package.json`:**
  * MyBord's package manager and metadata.
* **`postcss.config.js`:**
  * config file for PostCSS.
* **`README.md`:**
  * MyBord's root readme document.
* **`setupTests.js`:**
  * sets up jest when it gets run.
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

The src folder contains the source code for our application and is organized in the following
manner:

```
src/
  |- api/ 
  |- assets/ 
  |- context/ 
  |- hooks/ 
  |- mockData/ 
  |- server/ 
  |- spa/ 
  |- styles/ 
  |- thirdParty/ 
  |- types/ 
  |- utils/ 
  |- index.html
  |- index.less
  |- index.tsx
```

* **api/:**
  * The api folder contains the http service related scripts that are used to connect to any and
  all api's used in the app.
* **assets/:**
  * Image assets used in the app.
* **context/:**
  * Folder containing react context code to be used by different components.
* **hooks/:**
  * Folder containing custom hooks.
* **mockData/:**
  * Data to be re-used for things like tests, mock api's, storybooks, and more.
* **server/:**
  * The folder that contains how the application communicates to the backend. See the [server
   folder outline](#iii-server-folder) for additional details.
* **spa/:**
  * The folder that contains the react application source code. See the 
  [spa folder outline](#v-spa-folder) for additional details.
* **styles/:**
  * Contains all global styling. Note that styling dedicated to individual components should be
   stored in the components folders within the react folder.
* **thirdParty/:**
  * Javascript and react code used for integrating third party tooling such as Storybook. See the
  [third party folder outline](#iv-third-party-folder) for additional details.
* **types/:**
  * Folder containing types and interfaces used across the app.
* **utils/:**
  * Folder containing utility functions.
* **`index.html`:**
  * root html file used for the app.
* **`index.less`:**
  * The application's root stylesheet.
* **`index.tsx`:**
  * The executable javascript of the app.

## III. server folder

The server folder contains contains how the application communicates to the backend and is organized
in the following manner:

```
src/
  |- server/ 
     |- errors/ 
     |- schema/ 
```

* **errors/:**
  * Contains code that handles errors when communicating to our backend.
* **schema/:**
  * This folder should mirror our backend graphql schema for all related graphql queries, mutations,
  and subscriptions.
  
## IV. third party folder

The third party folder contains javascript and react code used for integrating third party
tooling. It is organized in the following manner:

```
src/
  |- thirdParty/ 
     |- google/ 
     |- lotty/ 
        |- lotties/ 
        |- lottiePlayer.tsx 
     |- storybook/ 
```

* **google/:**
  * Code used for interacting with the google api.
* **lotty/:**
  * Folder containing [Lottie](https://airbnb.io/lottie/#/) code. Note this folder is named
   'lotty' and not 'lottie' so it's folder alias won't create conflicts.
* **lottie/lotties:**
  * Folder containing [Lottie](https://airbnb.io/lottie/#/) json files.
* **`lottie/lottiePlayer.tsx`:**
  * Utility component to play a lottie file.
* **storybook/:**
  * Folder containing storybook code and universal tooling / wrapper.

## V. spa folder

The spa folder contains the react application source code and is organized in the following manner:

```
src/
  |- spa/
    |- app/ 
    |- landing/ 
    |- shared/ 
    |- spa.tsx
```

* **app/:**
  * The source code for the MyBord application (once a user is able to login). For further
   details, see the [app folder outline](#vi-app-folder).
* **landing/:**
  * The source code for what users see and interact with when they are not logged in. For further
   details, see the [landing folder outline](#vii-landing-folder).
* **shared/:**   
  * This folder contains react components that are not exclusive to any route or page but are shared
   across the app (including possibly the landing page).
* **`spa.tsx`:**
  * The actual root, highest parent react component used to define the application. The 'SPA'.
  Delegates if the user should be directed to the 'app' application or the 'landing' application
  based on the users authentication.
  
## VI. app folder

The app folder contains the react source code for the MyBord application (when the user is
authenticated), and is organized in the following manner:

```
src/
  |- spa/
    |- app/ 
      |- errorBoundary/ 
      |- initializeApp/ 
      |- layout/ 
      |- pages/ 
      |- routing/ 
      |- app.tsx
```

* **errorBoundary/:**
  * The react error boundary used for our application.
* **initializeApp/:**
  * Code used to initialize the app before it runs.
* **layout/:**
  * The frame and navigation of the application.
* **pages/:**
  * The page components per each route.
* **routing/:**
  * Outlines the routing of the application.
* **`app.tsx`:**
  * The root app component.

## VII. landing folder

The landing folder contains the react source code for what users interact with when they are not
logged in / authenticated, and is organized in the following manner:

```
src/
  |- spa/
    |- landing/ 
      |- pages/ 
      |- routing/ 
      |- app.tsx
```

* **pages/:**
  * The page components per each route.
* **routing/:**
  * Outlines the routing of the application.
* **`landing.tsx`:**
  * The root landing component.

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
