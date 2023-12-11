import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header';
import { Logo } from './components/Logo'
import { SocialIcons } from './components/SocialIcons';


function App() {
  return (
    <div className="App"
      <Header>
      <Logo/>     
      <SocialIcons />
      </Header>
      <Footer />
    </div>
  );
}

export default App;