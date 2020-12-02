import * as React from 'react';
import SignupFormContainer from './signupFormContainer';

interface Props {
  handleBack: () => void;
}

const SignupForm: React.FC<Props> = (props) => <SignupFormContainer {...props} />;

export default SignupForm;
