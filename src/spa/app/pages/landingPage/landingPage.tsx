import * as React from 'react';
import LoginForm from './loginForm/loginForm';
import * as styles from './landingPage.module.less';

const imagesArray = [
  'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const LandingPage: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const maxIndex = imagesArray.length - 1;
  const increaseIndex = (): void => {
    if (index === maxIndex) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const decreaseIndex = (): void => {
    if (index === 0) {
      setIndex(maxIndex);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <main className={styles.main}>
      <img
        alt="login-form-background"
        className={styles.img}
        src={imagesArray[index]}
      />
      <LoginForm />
      <div className={styles.removeMe}>
        <h4>{index}</h4>
        <button onClick={decreaseIndex} type="button">-</button>
        <button onClick={increaseIndex} type="button">+</button>
      </div>
    </main>
  );
};

export default LandingPage;
