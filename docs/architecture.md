<img align="right" width="294" height="257" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/architecture.png" alt="architecture">

# Architecture Guide

This summarizes the general architecture behind the MyBord front-end codebase.

## Table of Contents

* [I. Summary](#i-summary)   
* [II. Architecture](#ii-architecture)   
  * [A. Root Folder](#a-root)
  * [B. src Folder](#b-src-folder)
  * [C. server Folder](#c-server-folder)
  * [D. third party Folder](#d-third-party-folder)
  * [E. spa folder](#e-spa-folder)
  * [F. app folder](#f-app-folder)
  * [G. landing folder](#g-landing-folder)
* [III. Additional Resources](#iii-additional-resources)   

## I. Summary

Architecture throughout the codebase, and the documentation behind them, should accomplish the
following:

* **Scalability:**
    * To support the application's continuous growth both in terms of volume and complexity.
* **Team growth:**
    * If and when a development team grows, to enable multiple developers with various expertise
    levels to collaborate and develop on the application simultaneously. This should allow
    development to occur in the following ways:
        * Allows developers to easily work independently on the application without having to worry
        about other developers interfering with their code. Allows developers to not have to worry
        about learning or worrying about other areas of the application in which they do not own
        (multiple developers simultaneously building different components without having to worry
        about how other teammates are building those components and how said components work).
        * Enable teammates to collaborate easily and understand each other's work quickly given a
        development structure / architecture.
* **DRY-ability:**
    * Reduce redundancies in the codebase as well as make it easy to reduce future redundancies.
* **Learn-ability:**
    * Structure the application in such a way that it is easily understandable and easy for new
    developers to join and quickly begin developing. This will reduce the team's bus factor,
    making sure that one of our high points of failure is not having to lose a developer with highly
    developed domain knowledge.

## II. Architecture

The following outlines how the MyBord front-end codebase is architected.

### A. Root

The following architecture details are concerned with what should be contained in the root of the
application folder.

```
  .circleci/
    |- config.yml
  .storybook/  
  dist/
  docs/
  etc/
    |- assets/
    |- prToDo.md
  node_modules/
  src/
  .babelrc
  .eslintrc.js
  .gitignore
  .stylelintignore
  .stylelintrc
  .jest.config.js
  dev.env
  LICENSE.md
  local.env
  package.json
  postcss.config.js
  prod.env
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
* **etc/assets:**
  * folder containing images used in our docs.
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
* **`.stylelintignore`:**
  * configuration of folders for stylelint to ignore.
* **`.stylelintrc`:**
  * configuration of stylelint rules.
* **`.jest.config.js`:**
  * jest configs.
* **`dev.env`:**
  * a file containing node environment variables for your deployed development instance when running
   the client in 'DEV' mode.
* **`LICENSE.md`:**
  * Contains the software license / copyright.
* **`local.env`:**
  * a file containing node environment variables for your local running instance when running
   the client in 'LOCAL' mode.
* **`package.json`:**
  * MyBord's package manager and metadata.
* **`postcss.config.js`:**
  * config file for PostCSS.
* **`prod.env`:**
  * a file containing node environment variables for the deployed production instance when running
   the client in 'PROD' mode.
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

### B. src folder

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
   folder outline](#c-server-folder) for additional details.
* **spa/:**
  * The folder that contains the react application source code. See the 
  [spa folder outline](#e-spa-folder) for additional details.
* **styles/:**
  * Contains all global styling. Note that styling dedicated to individual components should be
   stored in the components folders within the react folder.
* **thirdParty/:**
  * Javascript and react code used for integrating third party tooling such as Storybook. See the
  [third party folder outline](#d-third-party-folder) for additional details.
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

### C. server folder

The server folder contains contains how the application communicates to the backend and is organized
in the following manner:

```
src/
  |- server/ 
     |- errors/ 
     |- schema/ 
     |- client.tsx
```

* **errors/:**
  * Contains code that handles errors when communicating to our backend.
* **schema/:**
  * This folder should mirror our backend graphql schema for all related graphql queries, mutations,
  and subscriptions.
* **`client.tsx`:**
  * This configures our Apollo Client to communicate with our back end.
  
### D. third party folder

The third party folder contains javascript and react code used for integrating third party
tooling. It is organized in the following manner:

```
src/
  |- thirdParty/ 
     |- framerMotion/ 
     |- lotty/ 
        |- lotties/ 
        |- lottiePlayer.tsx 
     |- storybook/ 
```

* **framerMotion/:**
  * This folder contains code that deals with our framer motion api and related animations.
* **lotty/:**
  * Folder containing [Lottie](https://airbnb.io/lottie/#/) code. Note this folder is named
   'lotty' and not 'lottie' so it's folder alias won't create conflicts.
* **lottie/lotties:**
  * Folder containing [Lottie](https://airbnb.io/lottie/#/) json files.
* **`lottie/lottiePlayer.tsx`:**
  * Utility component to play a lottie file.
* **storybook/:**
  * Folder containing storybook code and universal tooling / wrapper.

### E. spa folder

The spa folder contains the react application source code and is organized in the following manner:

```
src/
  |- spa/
    |- app/ 
    |- landing/ 
    |- shared/ 
    |- spa/ 
```

* **app/:**
  * The source code for the MyBord application (once a user is able to login). For further
   details, see the [app folder outline](#f-app-folder).
* **landing/:**
  * The source code for what users see and interact with when they are not logged in. For further
   details, see the [landing folder outline](#g-landing-folder).
* **shared/:**   
  * This folder contains react components that are not exclusive to any route or page but are shared
   across the app (including possibly the landing page).
* **spa/:**
  * This folder contains the actual code that invokes the final spa and initializes it. Although
   it is certainly redundant to have a 'spa' folder under the 'spa' folder, I wasn't sure what
   else to call this folder. Essentially, the first spa folder contains all react application
   source code, and the second spa folder contains code that invokes the final spa.
  
### F. app folder

The app folder contains the react source code for the MyBord application (when the user is
authenticated), and is organized in the following manner:

```
src/
  |- spa/
    |- app/ 
      |- errorBoundary/ 
      |- layout/ 
      |- pages/ 
      |- routing/ 
      |- app.tsx
```

* **errorBoundary/:**
  * The react error boundary used for our application.
* **layout/:**
  * The frame and navigation of the application.
* **pages/:**
  * The page components per each route.
* **routing/:**
  * Outlines the routing of the application.
* **`app.tsx`:**
  * The root app component.

### G. landing folder

The landing folder contains the react source code for what users interact with when they are not
logged in / authenticated, and is organized in the following manner:

```
src/
  |- spa/
    |- landing/ 
      |- errorBoundary/ 
      |- pages/ 
      |- routing/ 
      |- landing.module.less
      |- landing.tsx
```

* **errorBoundary/:**
  * The react error boundary used for our landing application.
* **pages/:**
  * The page components per each route.
* **routing/:**
  * Outlines the routing of the application.
* **`landing.module.less`:**
  * The main styling for our root landing component.
* **`landing.tsx`:**
  * The root landing component.

## III. Additional Resources

Here are some additional resources regarding structuring a react application (as well as redux
related content if you need):

* [redux.js.org: suggested code structure (official Redux recommendations)](https://redux.js.org/faq/code-structure)
* [reactjs.org: file structure recommendations (official React recommendations)](https://reactjs.org/docs/faq-structure.html)
* [Redux best practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e)
* [How to structure React applications](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/)
* [Structure your React-Redux project for scalability and maintainability](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7) 
* [Three rules for structuring Redux applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)
* [A better file structure for for React/Redux applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)
* [Organizing Large React Applications](http://engineering.kapost.com/2016/01/organizing-large-react-applications/)
