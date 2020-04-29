import * as React from 'react';
import App from 'app/app';

// This component renders when a user has already been authenticated / they have an
// existing session with our application. When this occurs, we don't need to render the application
// with a landing page that requires the user to sign in.
const SpaWithoutLogin: React.FC = () => <App />;

export default SpaWithoutLogin;
