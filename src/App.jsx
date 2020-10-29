import './App.css';
import './main.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Jeux from './component/pages/jeux';
import Accueil from './component/pages/accueil';
import NavBar from './component/navbar/navbar'

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/game" component={Jeux} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
