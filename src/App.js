//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greet from './Components/greet'
import Welcome from './Components/welcome'
import Hello from './Components/hello'
import Message from './Components/message'
import Counter from './Components/Counter'
import Algorithms from './Components/algorithms'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends React.Component {
  render() {
     return (
        <div className="App"> 
           <Counter />
           <Greet name="prateek" hero="hero1">
            <div>div1</div>
           </Greet>
        </div>
     );
  }
}

export default App;
