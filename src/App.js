import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Logo } from './components/Logo'
import { SocialIcons } from './components/SocialIcons';
import { CurrentDay } from './components/CurrentDay/CurrentDay'

function App() {
  return (
    <div className="App">
     <Header>
     </Header>
     <Main>
      <CurrentDay/>
     </Main>
     
      <Header>
      <Logo/>     
      <SocialIcons />
      </Header>
      <Footer />
      <CurrentDay />
    </div>
  );
}

export default App;