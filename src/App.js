import './App.css';
import Footer from './components/Footer/Footer';
import Para from './components/Paratime/Paratime';
import { Header } from './components/Header';
import { SocialIcons } from './components/SocialIcons';



function App() {
  return (
    <div className="App">
      <Header>
        <div>        
        </div>
      <SocialIcons />
      </Header>
      <Para number={4}/>         
      <Footer />
    </div>
  );
}

export default App;