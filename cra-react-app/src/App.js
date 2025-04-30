import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import Start from './components/Start';
import Bye from './components/Bye';
import CountContainer from './containers/Count';
import store from './redux/store';
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
      <h3>初始无redux</h3>
      <Start />
      <h3>有redux</h3>
      <Bye />
      <h3>
        react-redux早期容器套UI
      </h3>
      <CountContainer store={store} />
    </div>
  );
}

export default App;
