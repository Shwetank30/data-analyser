import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css'
import Format from './components/Format';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Data-Analyser</h1>
        </header>
        <button className='slider' onClick={ () => this.setState({ isPaneOpen: true })}>Click to Open right pane!</button>
        <SlidingPane
          className='some-cus'
          overlayClassName='kuch-aur'
          isOpen={ this.state.isPaneOpen }
          title='Hey, it is open'
          subtitle='optional'
          onRequestClose={ () => {
            this.setState({ isPaneOpen: false });
          }}
        >
          <div> Hum koi to hai</div>
          <br />
          <p> Koi hai </p>
        </SlidingPane>
        <MuiThemeProvider>
          <Format />
        </MuiThemeProvider>
        <p className="App-intro">
          Important components incoming
        </p>
      </div>
    );
  }
}

export default App;
