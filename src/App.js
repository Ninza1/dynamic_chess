import logo from './logo.svg';
import './App.css';
import { ChessSquire } from './components/ChessSquire';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <h1>Dynamic Chess Board</h1>
        <ChessSquire size={8} />

      </div>
    </div>
  );
}

export default App;
