import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div className="mx-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/update/:id" component={Update} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
