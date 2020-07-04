// Portals are cool. They allow us to create an element that is placed at the bottom of our dom
// tree (they allow us to "render children into a DOM node that exists outside the DOM hierarchy
// of the parent component").
// Sources:
//  * https://reactjs.org/docs/portals.html
//  * https://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions

/* eslint-disable */

import * as React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.style.display = 'inline-block';
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Portal;
