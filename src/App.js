import './App.css';
import { Header } from './components/Header';
import { LoadingIndicator } from './components/LoadingIndicator/LoadingIndicator';


function App() {
  return (
    <div className="App">
      <Header />
      <LoadingIndicator />      
    </div>
  );
}

export default App;
