import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {/* <Hello message="Hello World" color="blue"/>
        <Hello message="React Application" color="red"/> */}
        {/* <Counter initCount={5}/>
        <Counter initCount={10}/> */}
        <ListProducts/>
      </main>
    </div>
  );
}

export default App;
