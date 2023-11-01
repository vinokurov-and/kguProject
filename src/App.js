import './App.css';
import { Header } from './components/Header';
import { LoadingIndicator } from './components/LoadingIndicator';
import { Logo } from './components/Logo'

function App() {
  return (
    <div className="App">
      <Header><Logo/></Header>
      <LoadingIndicator />      
    </div>
  );
}

export default App;
