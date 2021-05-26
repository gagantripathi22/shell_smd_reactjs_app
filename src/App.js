import React, { StyleSheet } from 'react';
import './App.css';
import closeIcon from './assets/titlebar/close.png';
import minimizeIcon from './assets/titlebar/minimize.png';
import searchIcon from './assets/titlebar/search.png';
import settingsIcon from './assets/titlebar/settings.png';
import GettingStarted from './windows/getting_started/index.js'

const { remote } = window.require('electron');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarActive: false,
    };
  }

  closeWindow() {
    var window = remote.getCurrentWindow()
    window.close()
  }

  minimizeWindow() {
    var window = remote.getCurrentWindow()
    window.minimize()
  }

  maximizeWindow() {
    var window = remote.getCurrentWindow()
    window.maximize()
  }

  toggleSerach = () => {
    if (this.state.searchBarActive == false)
      this.setState({ searchBarActive: true });
    if (this.state.searchBarActive == true)
      this.setState({ searchBarActive: false });
  }

  changeWidth = (e) => {
    e.target.style.width = 50;
  }

  render() {
    return (
      <div className="container">
        <div className="titlebar">
          <div className="close" onClick={this.closeWindow}>
            <img src={closeIcon} className="closeIcon" />
          </div>
          <div className="minimize" onClick={this.minimizeWindow}>
            <img src={minimizeIcon} className="minimizeIcon" />
          </div>
        </div>
        <div className="main-area">
          <div className="main-container">
            <GettingStarted />
          </div>
        </div>
        <script src=""></script>
      </div>
    );
  }
}

export default App;