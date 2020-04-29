import * as React from 'react';
import initializeSpaWrapper from './initializeSpaWrapper';
import SpaWithLogin from './spaWithLogin';
import SpaWithoutLogin from './spaWithoutLogin';

interface Props {
  isAlreadyAuthenticated: boolean;
}

// This component is responsible for delegating what gets rendered in our SPA. If the user
// is already authenticated / has an existing session, then render them the application
// without a login portal. However, if the user is not authenticated / does not have an
// existing session, then render them an application with the required login portal.
const SpaDelegation: React.FC<Props> = ({ isAlreadyAuthenticated }) => {
  if (isAlreadyAuthenticated) {
    return <SpaWithoutLogin />;
  }
  return <SpaWithLogin />;
};

export default initializeSpaWrapper(SpaDelegation);
