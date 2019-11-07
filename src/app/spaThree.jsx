import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AnimatePresence, motion } from 'framer-motion';
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
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.key}>
            {/* eslint-disable-next-line react/no-children-prop */}
            <Route path="/red" children={<Red />} />
            {/* eslint-disable-next-line react/no-children-prop */}
            <Route path="/green" children={<Green />} />
            {/* eslint-disable-next-line react/no-children-prop */}
            <Route path="/blue" children={<Blue />} />
            {/* eslint-disable-next-line react/no-children-prop */}
            <Route path="/pink" children={<Pink />} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

function Red() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{
        ...styles.fill,
        background: 'red',
      }}
    />
  );
}

function Green() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{
        ...styles.fill,
        background: 'green',
      }}
    />
  );
}

function Blue() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{
        ...styles.fill,
        background: 'blue',
      }}
    />
  );
}

function Pink() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{
        ...styles.fill,
        background: 'pink',
      }}
    />
  );
}
