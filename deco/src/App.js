// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

// component
import Home from './component/home/Home'
import About from './component/about/About'
import Services from './component/services/Services'
import Ourteams from './component/ourteams/Ourteams'
import Contact from './component/contact/Contact'
import Portfolio from './component/portfolio/Portfolio'
import Portfoliodetails from './component/portfoliodetails/Portfoliodetails'

function App() {
  return (
    <div className="App">
       <Router>

          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

              <Route path='/About'>
                <About/>
              </Route>

              <Route path='/Services'>
                <Services/>
              </Route>

              <Route path='/Ourteams'>
                <Ourteams/>
              </Route>

              <Route path='/Contact'>
                <Contact/>
              </Route>

              <Route path='/Portfolio'>
                <Portfolio/>
              </Route>

              <Route path='/Portfoliodetails'>
                <Portfoliodetails/>
              </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
