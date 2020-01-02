import * as React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(
      data: {
        email: $email
        name: $name
        password: $password
      }
    ) {
      id
      email
      name
      password
    }
  }
`;

const LoginPage: React.FC = () => {
  const emailInputRef = React.useRef(null);
  const nameInputRef = React.useRef(null);
  const passwordInputRef = React.useRef(null);
  const [createUser, { data }] = useMutation(CREATE_USER);

  console.log('************');
  console.log(data);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createUser({
            variables: {
              email: emailInputRef.current.value,
              name: nameInputRef.current.value,
              password: passwordInputRef.current.value,
            },
          });
        }}
      >
        <input ref={emailInputRef} placeholder="email" />
        <input ref={nameInputRef} placeholder="name" />
        <input ref={passwordInputRef} placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
