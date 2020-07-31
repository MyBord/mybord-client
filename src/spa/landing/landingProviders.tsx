import * as React from 'react';
import { LandingContextProvider } from 'context/landingContext/landingContext';

interface Props {
  children: React.ReactNode;
}

const LandingProviders: React.FC<Props> = ({ children }) => (
  <LandingContextProvider>
    {children}
  </LandingContextProvider>
);

export default LandingProviders;
