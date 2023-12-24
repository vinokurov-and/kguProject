import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { SocialIcons } from './components/SocialIcons';
import YourComponent from './components/Collapse/index';
import DayOfWeekShort from './components/DayOfWeekShort/DayOfWeekShort';

function App() {
  return (
    <div className="App">
      <Header>
        <Logo/>
        <SocialIcons />
        <h1>День недели: <DayOfWeekShort /></h1>
      </Header>
      <YourComponent />
      <Footer />
    </div>
  );
}

export default App;