import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Logo } from './components/Logo'
import { SocialIcons } from './components/SocialIcons';
import { WeekType } from './components/WeekType';
import { CurrentWeek } from './components/WeekType';


function App() {
  return (
    <div className="App">
      <Header>
      <WeekType weekTypee={CurrentWeek%2===0} />
      <Logo/>     
      <SocialIcons />
      </Header>
      <Footer />
    </div>
  );
}

export default App;