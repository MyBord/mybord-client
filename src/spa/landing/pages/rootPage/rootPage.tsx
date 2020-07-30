// The root page for the landing app should not show anything different; just the login form.

import * as React from 'react';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const RootPage: React.FC = () => <div />;

export default pageWrapper(RootPage);
