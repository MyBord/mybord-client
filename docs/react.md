<img align="right" width="320" height="225" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/react.png">

# React

The following documentation summarizes how react is used in the codebase, how it is organized, the
architecture behind creating react components, best react component principles, react naming
conventions, and react styling principles.

## Table of Contents

* [I. Component Architecture](#i-component-architecture)
* [I. Component Principles](#ii-component-principles)
* [III. Additional Resources](#iii-additional-resources)

## I. Component Architecture

Ideally, every component / component tree should have its own, dedicated folder. Each component
and nested component should have a root `.tsx` component file, a css module stylesheet, and a
test script. Some other folders may be needed.

```
sampleComponent/
  |- sampleComponentContext/ *
  |- sampleComponentReducer/ *
     |- sampleComponentReducer.test.ts *
     |- sampleComponentReducer.ts *
     |- sampleComponentReducerTypes.ts *
  |- sampleComponentStorybook/
     |- sampleComponent.stories.ts
     |- sampleComponent.markup.ts
     |- sampleComponent.demo.tsx
     |- sampleComponent.examples.tsx *
  |- sampleComponentChild/
     |- sampleComponentGrandChild/
        |- ...
     |- sampleComponentChild.tsx
     |- sampleComponentChild.module.less
     |- sampleComponentChild.test.tsx
  |- sampleComponentAnotherChild/
     |- ...
  |- sampleComponent.tsx
  |- sampleComponent.module.less
  |- sampleComponent.less *
  |- sampleComponent.test.tsx
```

* **sampleComponentContext/**
    * If we need to use the react context api for this component tree, then the context code will
     belong in this folder.
* **sampleComponentReducer/**
    * If we use the `useReducer` hook to create a single state object for the entire component tree,
      then this folder will contain the code for the component tree's reducer, as well as the
      reducer's types and the reducer test.
* **sampleComponentStorybook/**
    * Most components, except for components like entire pages and a few other minor exceptions,
      should have a storybook. This is the folder where that code is contained. For more details,
      please see [here](https://bitbucket.org/allcampus/bei-bei/src/master/docs/storybook.md).
* **sampleComponentChild/**
    * All other components in the component tree should be organized in nested folders. They, too,
    should have a root `.tsx` file, a css module file, and a test script.
* `sample.tsx`
    * The main `sample` component.
* `sample.module.less`
    * All sass styling used for the `sample` component. We use `CSS Modules` to style our
    components.
* `sample.test.tsx`
    * The tests for our sample component.

**Note:** When working with ant components, in addition to a css module style sheet (e.g.
`sampleComponent.module.less`), we may also need an additional, non css module stylesheet to
individually style the specific ant component (e.g. `sampleComponent.less`)

## II. Component Principles

Here are some component principles to maintain:

* All page components (the react components at the highest page level in the `src/app/pages/`
folder) should *always* be wrapped with the `hydrationWrapper` to make sure that every page is well
hydrated before the page actually mounts.
* React components should always be functional and use hooks instead of being class components
unless this is completely necessary (e.g. writing an error boundary).
* Avoid extensive drilling if you can.
* Avoid redux if you don't need to.
* Try to manage your state colocation appropriately. Knowing when to use internal component state,
a `useReducer` hook, context, or redux should be done thoughtfully.
* Components should not do too many things. It's better to write three components that each do
one thing than one large component that does three things.
* Use selectors as much as possible to extract the handling of business logic.
* We probably don't need to create both container and presentational components. This is an old
paradigm that [Dan Abramov has distanced himself from](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
That said, there still may be the odd use case for them.
* If you use the `useReducer` hook, be explicit. e.g.:

```js
  import * as React from 'react';

  const Button: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState); // bad
    const [buttonState, buttonDispatch] = React.useReducer(reducer, initialState); // good

    ...
  }
```

## III. Additional Resources:

* [AirBnB React style guide](https://github.com/airbnb/javascript/blob/master/react/README.md)
* [React/Redux style guide](https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf)
* [Stateless Functional Components - the good; Cory House](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)
* [Stateless Functional Components - the bad; Cory House](https://medium.freecodecamp.org/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c)
* [React.Component; React](https://reactjs.org/docs/react-component.html)
* [Presentational and Container Components; Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [Dan Abramov: Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [The constructor is dead](https://hackernoon.com/the-constructor-is-dead-long-live-the-constructor-c10871bea599)
* [7 things about React 16](https://blog.pusher.com/7-things-about-react-16/)
* [Prop Drilling](https://blog.kentcdodds.com/prop-drilling-bb62e02cb691)
* [React: Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
* [Higher Order Components by example](https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006)
* [Higher Order Components design pattern](https://medium.com/front-end-weekly/higher-order-component-hoc-design-pattern-in-react-9a6ba4eec59d)
