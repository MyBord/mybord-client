import * as React from 'react';
import SpaFallback from 'fallbacks/spaFallback/spaFallback';

// This wrapper is responsible for initializing our SPA. Once all fetches, actions, etc have
// been performed, then the actual SPA can be rendered. In the meantime, we will load a spinner
// for the entire page. At the moment, the wrapper does the following on initialization:
//   * Performs a backend query to determine if the current user has already been authenticated
//     / has an existing session or not.
// Note: We are not using Suspense here because we cannot have transitions between fallbacks.
const initializeSpaWrapper = (WrappedComponent: React.FC): React.FC => {
  const WrappedSpa: React.FC = () => <SpaFallback />;

  return WrappedSpa;
};

export default initializeSpaWrapper;
