import './App.css';
import './main.css'
import Footer from './components/footer/Footer'

import './main.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Jeux from './components/pages/Jeux';
import Accueil from './components/pages/Accueil';
import NavBar from './components/navbar/Navbar'


function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/game" component={Jeux} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
