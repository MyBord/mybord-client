import * as React from 'react';
import * as styles from 'storybook/storybook.module.less';
import TextInput from '../textInput';
import PasswordInput from '../../passwordInput/passwordInput';

const TextInputDemo: React.FC = () => (
  <section
    className={[styles.examplesSection, styles.widthLimit25].join(' ')}
  >
    <h3 className={styles.h3}>Standard</h3>
    <TextInput
      placeholder="What's on your mind?"
    />
    <h3 className={styles.h3}>Password Input</h3>
    <PasswordInput
      placeholder="Password"
    />
    <h3 className={styles.h3}>Error</h3>
    <TextInput
      defaultValue="not-a-valid-email"
      helpMessage="Please enter a valid email"
      placeholder="Enter Email"
      status="error"
    />
    <h3 className={styles.h3}>Disabled</h3>
    <TextInput disabled />
  </section>
);

export default TextInputDemo;
