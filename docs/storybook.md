# Storybook

"[Storybook](https://storybook.js.org/) is a user interface development environment and playground
for UI components. The tool enables developers to create components independently and showcase
components interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in isolation without
worrying about app specific dependencies and requirements."

## Table of Contents

* [I. Configuration and Build](#markdown-header-i-configuration-and-build)
    * [A. Config Files](#markdown-header-a-config-files)
    * [B. Build](#markdown-header-b-build)
    * [C. Addons](#markdown-header-c-addons)
* [II. Creating a Story](#markdown-header-ii-creating-a-story)
    * [A. Summary](#markdown-header-a-summary)
    * [B. Creating a Story](#markdown-header-b-creating-a-story)
    * [C. Storybook Folder](#markdown-header-c-storybook-folder)
* [III. Additional Resources](#markdown-header-iii-additional-resources)

## I. Configuration and Build

### A. Config Files

Storybook's config files can be found in the root `.storybook/` folder, and has the following 
files: 

* `addons.js`: a list of storybook addons.
* `addons.configs.js`: a config script for all utilized addons to be executed in storybook's 
`config.js`.
* `config.js`: A config file that declares how to find and load storybook files.
* `preview-head.html`: This file allows us to customize the root styling of the storybook
viewport. See [here](https://storybook.js.org/docs/configurations/add-custom-head-tags/) for
further details.
* `viewport.config.js`: viewport screen size configurations.
* `webpack.config.js`: Storybook's webpack config. In this case, we just use the
`webpack.common.js` file in the root of the directory.

### B. Build

`package.json` has the following scripts, and they will do the following:

```
"scripts": {
  "storybook": "start-storybook",
  "build-storybook": "build-storybook -c .storybook -o .out",
},
```

* Commands:
    * `yarn storybook`: runs storybook on a local server.
    * `yarn build-storybook`: builds storybook as a static app. Is saved to the `.out/` folder in
     the root of the directory.

* Further resources:
    * [Storybook setup guide for React](https://storybook.js.org/docs/guides/guide-react/)
    * [Exporting Storybook as a Static App](https://storybook.js.org/docs/basics/exporting-storybook/)

### C. Addons

Addons are extensions to storybook that can enhance its features. The config file, `addons.js`, 
lists which addons are to be used. You can find more about that config file
[here](https://storybook.js.org/docs/addons/using-addons/).

You can also make sure that your addons are added as global decorators. For example, to make sure
the `knobs` addon is globally added to storybook, you can do the following to your `config.js` 
file:

**config.js:**
```js
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const loadStories = () => {
  // add stories
};

configure(loadStories, module);
```

The list of currently used addons are the following:

* a11y
    * description: "This storybook addon can be helpful to make your UI components more accessible."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/a11y)
* Actions
    * description: "Storybook Addon Actions can be used to display data received by event handlers
    in Storybook."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/actions)
* Backgrounds
    * description: "Storybook Background Addon can be used to change background colors inside the
     preview in Storybook."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/backgrounds)
* Console
    * description: "Redirects console output into Action Logger Panel"
    * [Source Code](https://github.com/storybookjs/storybook-addon-console)
* Info
    * description: "Storybook Info Addon will show additional information for your stories in
    Storybook. Useful when you want to display usage or other types of documentation alongside your
    story."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/info)
* Knobs
    * description: "Storybook Addon Knobs allow you to edit React props dynamically using the 
    Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
* Links    
    * description: "The Storybook Links addon can be used to create links that navigate between
    stories in Storybook."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/links)
* storybook-addon-state
    * description: "A storybook addon to give you access to store/retrieve arbitrary data."
    * [Source Code](https://github.com/adierkens/storybook-addon-state)
* Viewport
    * "Storybook Viewport Addon allows your stories to be displayed in different sizes and 
    layouts in Storybook. This helps build responsive components inside of Storybook."
    * [Source Code](https://github.com/storybookjs/storybook/tree/master/addons/viewport)

## II. Creating a Story

### A. Summary

In order to have a consistent design language for our app, we have created additional storybook
tooling that creates consistent unified stories to help document our components.

In summary, a component, e.g. `sampleComponent.tsx`, should have a storybook file named
`sampleComponent.stories.tsx`. That story should then use the `createStory` wrapper to create it's
story file, like so:

**sampleComponent.stories.tsx:**
```js
import createStory from 'thirdParty/storybook/createStory';
// ... additional imports

createStory({
  // .. params
});
```

### B. Creating a Story

In order to create a story for a component, you will need the following things:

* The component ; `sampleComponent.tsx`
* The story file ; `sampleComponent.stories.tsx`
* The markdown documentation ; `sampleComponent.markdown.ts`
* The component to be rendered in the demo section ; `sampleComponent.demo.tsx`
* The component to be rendered in the examples section ; `sampleComponent.examples.tsx`

The final story file that will instantiate the story should look something like this:

```js
import createStory from 'thirdParty/storybook/createStory';
import SampleComponentDemo from './sampleComponent.demo';
import SampleComponentExamples from './sampleComponent.examples';
import { api, howTo } from './sampleComponent.markup';

createStory({
  Demo: SampleComponentDemo,
  Examples: SampleComponentExamples,
  description: 'This is the description of the component.',
  api,
  componentName: 'SampleComponent',
  howTo,
});
```

### C. Storybook Folder

The storybook folder in the thirdParty folder (`src/thirdParty/storybook`) has the following
files, which are used to help create the unified stories:

```
src/thirdParty/storybook/
  |- codeBlock.tsx
  |- createScratchStory.tsx
  |- createStory.tsx
  |- storybook.module.less
  |- storybookHeader.tsx
```

* `codeBlock.tsx`: React component used by `ReactMarkdown` to render highlighted syntax.
* `createScratchStory.tsx`: Utility function used to create a temporary storybook so we can
evaluate a component while building it in storybook.
* `createStory.tsx`: Utility function that creates a custom storybook with default styling and
organization details.
* `storybook.module.less`: Styling used for our storybook.
* `storybookHeader.tsx`: Navigation header used in the stories.

## III. Additional Resources

* [Storybook](https://storybook.js.org/)
* [Storybook Docs](https://storybook.js.org/docs/basics/introduction/)
* [Storybook source code](https://github.com/storybookjs/storybook)
