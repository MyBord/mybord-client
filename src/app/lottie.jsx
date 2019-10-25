import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './sample.json';

// eslint-disable-next-line react/prefer-stateless-function
class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
  }
}

export default UncontrolledLottie;
