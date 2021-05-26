import React, { StyleSheet } from 'react';
import './style.css';
import * as utils from './test';

class GettingStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarActive: false,
    };
  }
  componentDidMount() {
    var h =document.querySelector('.getting-started-btn');

    document.body.onmousemove = function(e) {
      /* 15 = background-size/2 */
      h.style.setProperty('background-position',(e.clientX - 15)+'px '+(e.clientY - 15)+'px');
    }
  }
  hehe() {
  }
  render() {
    return (
    <div className="getting-started-container">
        <div className="logo-placeholder"></div>
        <div className="getting-started-bg">
          <div className="getting-started-btn">
            <div className="getting-started-text" onClick={() => this.hehe()}>Get Started</div>
          </div>
        </div>
    </div>
    );
  }
}

export default GettingStarted;