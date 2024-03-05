import squat from './Squat.jpeg';
import './App.css';
import ContainerExample from './components/Container.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={squat} className="App-logo" alt="logo" />
        <ContainerExample />
      </header>
    </div>
  );
}

export default App;
