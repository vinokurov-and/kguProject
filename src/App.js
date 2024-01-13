import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Logo } from './components/Logo'
import { SocialIcons } from './components/SocialIcons';
import { CurrentDay } from './components/CurrentDay/CurrentDay'
import { LessonType } from './components/LessonType';

function App() {
  return (
    <div className="App">
     <Header>
      <h2><LessonType /></h2>
      <Logo/>     
      <SocialIcons />
      </Header>
      <Footer />
    </div>
  );
}

export default App;
