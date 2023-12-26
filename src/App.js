import './App.css';
import Footer from './components/Footer/Footer';
import Para from './components/Paratime/Paratime';
import { Header } from './components/Header';
import { SocialIcons } from './components/SocialIcons';
import { ButtonFormatTime } from './components/Paratime/ButtonFormatTime';


function App() {
  return (
    <div className="App">
      <Header>
        <div>        
        </div>
      <SocialIcons />
      </Header>
      <Para number={1}/>         
      <ButtonFormatTime></ButtonFormatTime>
      <Footer />
    </div>
  );
}

export default App;