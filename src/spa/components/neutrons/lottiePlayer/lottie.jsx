/* eslint-disable */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// Source: https://github.com/chenqingspring/react-lottie

// eslint-disable-next-line no-use-before-define
import React from 'react';
import lottie from 'lottie-web';

export default class Lottie extends React.Component {
  componentDidMount() {
    const {
      options,
      eventListeners,
    } = this.props;

    const {
      loop,
      autoplay,
      animationData,
      rendererSettings,
      segments,
    } = options;

    this.options = {
      animationData,
      autoplay: autoplay !== false,
      container: this.el,
      loop: loop !== false,
      renderer: 'svg',
      rendererSettings,
      segments: segments !== false,
    };

    this.options = { ...this.options, ...options };

    this.anim = lottie.loadAnimation(this.options);
    // eslint-disable-next-line react/destructuring-assignment
    this.anim.setSpeed(this.props.speed);
    this.registerEvents(eventListeners);
  }

  UNSAFE_componentWillUpdate(nextProps /* , nextState */) {
    /* Recreate the animation handle if the data is changed */
    if (this.options.animationData !== nextProps.options.animationData) {
      // eslint-disable-next-line react/destructuring-assignment
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();
      this.options = { ...this.options, ...nextProps.options };
      this.anim = lottie.loadAnimation(this.options);
      this.registerEvents(nextProps.eventListeners);
    }
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.isStopped) {
      this.stop();
      // eslint-disable-next-line react/destructuring-assignment
    } else if (this.props.segments) {
      this.playSegments();
    } else {
      this.play();
    }

    this.pause();
    this.setSpeed();
    this.setDirection();
  }

  componentWillUnmount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.deRegisterEvents(this.props.eventListeners);
    this.destroy();
    this.options.animationData = null;
    this.anim = null;
  }

  // eslint-disable-next-line react/sort-comp
  setSpeed() {
    // eslint-disable-next-line react/destructuring-assignment
    this.anim.setSpeed(this.props.speed);
  }

  setDirection() {
    // eslint-disable-next-line react/destructuring-assignment
    this.anim.setDirection(this.props.direction);
  }

  handleClickToPause() {
    // The pause() method is for handling pausing by passing a prop isPaused
    // This method is for handling the ability to pause by clicking on the animation
    if (this.anim.isPaused) {
      this.anim.play();
    } else {
      this.anim.pause();
    }
  }

  play() {
    this.anim.play();
  }

  playSegments() {
    // eslint-disable-next-line react/destructuring-assignment
    this.anim.playSegments(this.props.segments);
  }

  stop() {
    this.anim.stop();
  }

  pause() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.isPaused && !this.anim.isPaused) {
      this.anim.pause();
      // eslint-disable-next-line react/destructuring-assignment
    } else if (!this.props.isPaused && this.anim.isPaused) {
      this.anim.pause();
    }
  }

  destroy() {
    this.anim.destroy();
  }

  registerEvents(eventListeners) {
    eventListeners.forEach((eventListener) => {
      this.anim.addEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  deRegisterEvents(eventListeners) {
    eventListeners.forEach((eventListener) => {
      this.anim.removeEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  render() {
    const {
      width,
      height,
      ariaRole,
      ariaLabel,
      isClickToPauseDisabled,
      title,
    } = this.props;

    const getSize = (initial) => {
      let size;

      if (typeof initial === 'number') {
        size = `${initial}px`;
      } else {
        size = initial || '100%';
      }

      return size;
    };

    const lottieStyles = {
      width: getSize(width),
      // eslint-disable-next-line sort-keys
      height: getSize(height),
      overflow: 'hidden',
      // eslint-disable-next-line sort-keys
      margin: '0 auto',
      outline: 'none',
      // eslint-disable-next-line react/destructuring-assignment
      ...this.props.style,
    };

    const onClickHandler = isClickToPauseDisabled ? () => null : this.handleClickToPause;

    return (
      <div
        ref={(c) => {
          this.el = c;
        }}
        aria-label={ariaLabel}
        onClick={onClickHandler}
        role={ariaRole}
        style={lottieStyles}
        tabIndex="0"
        title={title}
      />
    );
  }
}

Lottie.defaultProps = {
  ariaLabel: 'animation',
  ariaRole: 'button',
  eventListeners: [],
  isClickToPauseDisabled: false,
  isPaused: false,
  isStopped: false,
  speed: 1,
  title: '',
};
