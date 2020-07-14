import * as React from 'react';
import ErrorBoundary from 'landing/errorBoundary/errorBoundary';
import Routes from 'landing/routing/routes';
import loginBackground from 'assets/loginBackground.jpg';
import * as styles from './landing.module.less';

const images = [
  'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const buttonStyle = {
  width: '3rem', height: '3rem', background: '#00A6ED', color: 'white',
};

const Landing: React.FC = () => {
  const [i, setI] = React.useState<number>(0);

  const handleDecrease = (): void => setI((prevState) => {
    if (prevState === 0) {
      return images.length - 1;
    }
    return prevState - 1;
  });

  const handleIncrease = (): void => setI((prevState) => {
    if (prevState === (images.length - 1)) {
      return 0;
    }
    return prevState + 1;
  });

  return (
    <ErrorBoundary>
      <main>
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
          }}
        >
          <button onClick={handleDecrease} type="button" style={buttonStyle}>-</button>
          <button onClick={handleIncrease} type="button" style={buttonStyle}>+</button>
          <div style={buttonStyle}>{i}</div>
        </div>
        <img
          alt="login-form-background"
          className={styles.img}
          src={images[i]}
        />
        <Routes />
      </main>
    </ErrorBoundary>
  );
};

export default Landing;
