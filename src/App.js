import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Flair</h2>
        </div>
        <p className="App-intro">
          You can change code at <code>src/App.js</code>
        </p>
      </div>
    );
  }
}

// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       你好，世界
//     </Button>
//   );
// }
 
export default App;