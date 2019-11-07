import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from 'react-router-dom';

const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center',
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
};

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px',
};

export default function AnimationExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/red" />
        </Route>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}

function AnimationApp() {
  const location = useLocation();

  return (
    <div style={styles.fill}>
      <ul>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/pink">Pink</Link>
      </ul>
      <div style={styles.content}>
        <TransitionGroup>
          {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              {/* eslint-disable-next-line react/no-children-prop */}
              <Route path="/red" children={<Red />} />
              {/* eslint-disable-next-line react/no-children-prop */}
              <Route path="/green" children={<Green />} />
              {/* eslint-disable-next-line react/no-children-prop */}
              <Route path="/blue" children={<Blue />} />
              {/* eslint-disable-next-line react/no-children-prop */}
              <Route path="/pink" children={<Pink />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

function Red() {
  return (
    <div
      style={{
        ...styles.fill,
        background: 'red',
      }}
    />
  );
}

function Green() {
  return (
    <div
      style={{
        ...styles.fill,
        background: 'green',
      }}
    />
  );
}

function Blue() {
  return (
    <div
      style={{
        ...styles.fill,
        background: 'blue',
      }}
    />
  );
}

function Pink() {
  return (
    <div
      style={{
        ...styles.fill,
        background: 'pink',
      }}
    />
  );
}
