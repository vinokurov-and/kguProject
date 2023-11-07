import './App.css';
import { Header } from './components/Header';
import { LoadingIndicator } from './components/LoadingIndicator/LoadingIndicator';
import { BackButton } from './components/BackButton/BackButton';

function App() {
  return (
    <div className="App">
      <Header />
      <LoadingIndicator />      
      <BackButton />   
    </div>
  );
}

export default App;
