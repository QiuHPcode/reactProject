import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Start from './components/Start';
import Bye from './components/Bye';
function App() {
  return (
    <div >
      {/* <header className="App-header">
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
      </header> */}
      <Start />
      <Bye />
    </div>
  );
}

export default App;
