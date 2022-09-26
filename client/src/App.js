import './App.css';
import {Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav.jsx';
import CountryDetail from './components/CountryDetail/CountryDetail.jsx';
import CreateActivity from './components/CreateActivity/CreateActivity.jsx';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route path='/Home' component={Nav}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Home/Countries/:id' component={CountryDetail}/>
      <Route exact path='/Home/Create' component={CreateActivity} />
    </div>
  );
}

export default App;
