import './App.css';
import Footer from './components/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;