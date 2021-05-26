import React, { StyleSheet } from 'react';
import CancelIcon from '../../../assets/icon-close.png';
import './style.css';

class GettingStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarActive: false,
    };
  }
  componentDidMount() {
    var h =document.querySelector('.create-btn');

    document.body.onmousemove = function(e) {
      /* 15 = background-size/2 */
      h.style.setProperty('background-position',(e.clientX - 25)+'px '+(e.clientY - 25)+'px');
    }
    
  }
  hehe() {
  }
  render() {
    return (
    <div className="project-name-container">
        {/* <div className="logo-placeholder"></div> */}
        <div className="project-name-center">
          <div className="project-name-text">Project Name</div>
          <input className="project-name-tf" spellCheck={false} />
          <div className="create-btn-bg">
            <div className="create-btn">
              <div className="create-text" onClick={() => this.hehe()}>Create</div>
            </div>
          </div>
        </div>
        <div className="cancel-btn">
          <img src={CancelIcon} className="close-icon" alt="Logo" />
        </div>
    </div>
    );
  }
}

export default GettingStarted;