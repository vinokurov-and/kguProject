import './App.css';
import Footer from './components/Footer/Footer';
import Para from './components/Paratime/Paratime';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { SocialIcons } from './components/SocialIcons';
import YourComponent from './components/Collapse/index';
import DayOfWeekShort from './components/DayOfWeekShort/DayOfWeekShort';
import { WeekType } from './components/WeekType';
import { CurrentWeek } from './components/WeekType';
import { CurrentDay } from './components/CurrentDay/CurrentDay'
import { LessonType } from './components/LessonType';
import { Descriprion } from './components/Description'

function App() {
  return (
    <div className="App">
      <Header>
        <Logo/>
        <SocialIcons />
        <h1>День недели: <DayOfWeekShort /></h1>
      </Header>
      <YourComponent />
      <Header>
      <WeekType weekTypee={CurrentWeek%2===0} />
     <Header>
      <h2><LessonType /></h2>
     </Header>
     <Main>
      <CurrentDay/>
     </Main>
      <Header>
      <Descriprion />
      <Logo/>     
      <SocialIcons />
      </Header>
      <Para number={4}/>         
      <Footer />
    </div>
  );
}

export default App;
