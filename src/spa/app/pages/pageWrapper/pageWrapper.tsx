// This objective of this wrapper is to create a general api that takes a page of our app
// along with the GQL query that derives all necessary data for said page and runs that query.
// The data is then provided to the page to render its necessary components.

// when `setHydration=false`, that means that once our data has been retrieved from the backend
// and / or our wrapped component (`Component`) has mounted, we DO NOT want to stop our page's
// spinner / loading animation. This is because there might be additional work that is *still*
// happening in the background of the wrapped component after data has been drilled, such as a
// context reducer being mutated.

import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';

interface Props {
  Component: React.FC;
  gqlString?: string;
  setHydration?: boolean;
}

const pageWrapper = ({
  Component,
  gqlString,
  setHydration = true,
}: Props): React.ReactElement => (
  <div>
    <Spinner />
    <Component />
  </div>
);

export default pageWrapper;
