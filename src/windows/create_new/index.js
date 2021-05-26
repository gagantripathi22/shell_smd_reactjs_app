import React, { StyleSheet } from 'react';
import { Link, NavLink } from "react-router-dom";
import './style.css';

class CreateNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarActive: false,
    };
  }
  componentDidMount() {
    var h =document.querySelector('.create-new-item');

    document.body.onmousemove = function(e) {
      /* 15 = background-size/2 */
      h.style.setProperty('background-position',(e.clientX - 50)+'px '+(e.clientY - 50)+'px');
    }
  }
  render() {
    return (
    <div className="create-new-container">
        {/* <div className="logo-placeholder"></div> */}
        <div className="create-new-project-text">Create New Project</div>
        <div className="create-new-item-hover-div">
          <div className="create-new-item-bg">
            <div className="create-new-item">
              {/* <div className="getting-started-text" onClick={() => {}}>Continue</div> */}
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default CreateNew;