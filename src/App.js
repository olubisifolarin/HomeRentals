
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Tenant from './pages/Tenant';
import Landlord from './pages/Landlord';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      
      <Router>     
              <Route exact path="/" component={Home} />
              <Route exact path="/landlord" component={Landlord} />
              <Route exact path="/tenant" component={Tenant} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
 
      </Router>
      
    </div>
  );
}

export default App;
