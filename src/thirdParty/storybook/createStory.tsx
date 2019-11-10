import * as React from 'react';
import addonStyles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import DemoPage from './demoPage';
import SummaryPage from './summaryPage';

interface Props {
  Demo: React.FC; // React component to be rendered in demo section
  Examples?: React.FC; // React component to be rendered in examples section
  api?: string; // api markup documentation
  componentName: string; // name of component that is to be displayed in header.
  demoCenter?: boolean; // if true, the demo component should be rendered in the center of the
  // viewport
  demoHeader?: boolean; // if false, remove the header from the demo view.
  demoMargin?: boolean; // if true, the demo component should be rendered with extra margin in the
  // viewport
  description: string; // description of component that is to be displayed in header.
  howTo?: string; // howTo markup documentation
  rootDirectory?: string; // configures appropriate path / root structure for storybook of there
  summaryPage?: boolean; // should the summary page be enabled
}

const bothPages = (props: Props): void => {
  const path = props.rootDirectory ? `${props.rootDirectory}/${props.componentName}` : props.componentName;
  storiesOf(path, module)
    .addDecorator(addonStyles({
      height: '100vh',
    }))
    .add('Summary', () => (
      <SummaryPage
        Examples={props.Examples}
        api={props.api}
        componentName={props.componentName}
        description={props.description}
        howTo={props.howTo}
        path={path}
      />
    ))
    .add('Demo', () => (
      <DemoPage
        Demo={props.Demo}
        componentName={props.componentName}
        demoCenter={props.demoCenter}
        demoHeader={props.demoHeader}
        demoMargin={props.demoMargin}
        description={props.description}
        path={path}
      />
    ));
};

const demoPageOnly = (props: Props): void => {
  const path = props.rootDirectory;
  storiesOf(path, module)
    .addDecorator(addonStyles({
      height: '100vh',
    }))
    .add(props.componentName, () => (
      <DemoPage
        Demo={props.Demo}
        componentName={props.componentName}
        demoCenter={props.demoCenter}
        demoHeader={props.demoHeader}
        demoMargin={props.demoMargin}
        description={props.description}
        path={path}
        summaryPage={props.summaryPage}
      />
    ));
};

export default ({
  Demo,
  Examples,
  api,
  componentName,
  demoCenter = false,
  demoHeader = true,
  demoMargin = false,
  description,
  howTo,
  rootDirectory = null,
  summaryPage = true,
}: Props): void => (
  summaryPage
    ? bothPages({
      Demo,
      Examples,
      api,
      componentName,
      demoCenter,
      demoHeader,
      demoMargin,
      description,
      howTo,
      rootDirectory,
      summaryPage,
    })
    : demoPageOnly({
      Demo,
      Examples,
      api,
      componentName,
      demoCenter,
      demoHeader,
      demoMargin,
      description,
      howTo,
      rootDirectory,
      summaryPage,
    })
);
