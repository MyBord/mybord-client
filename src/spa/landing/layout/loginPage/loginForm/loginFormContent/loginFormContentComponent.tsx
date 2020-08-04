import * as React from 'react';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import { useLandingContext } from 'context/landingContext/landingContext';
import LoginFormAlert from './loginFormAlert/loginFormAlert';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  form?: FormProp;
}

const LoginFormContentComponent: React.FC<Props> = ({ form }) => {
  const { headerRef } = useLandingContext();

  const handleClick = (): void => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <>
      <LoginFormAlert form={form} />
      <LoginFormInputs form={form} />
      <LoginFormButtons form={form} />
      {/* <LoginFormSocial /> */}
      <Typography
        text="About MyBord"
        link="/about"
        onClick={handleClick}
      />
    </>
  );
};

export default LoginFormContentComponent;
