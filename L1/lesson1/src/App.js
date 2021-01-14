import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <span>{this.state.counter}</span>
        <button onClick={this.increase}>INCREASE</button>
        <button onClick={this.decrease}>DECREASE</button>
      </div>
      
    )
  }
}

export default App;
