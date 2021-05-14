// const { Route } = require("react-router");
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieSearch from './pages/MovieSearch';


const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact to='/'>
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink to='/search'>
          Search
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/search' component={MovieSearch} />
    </Switch>
  </>
);



export default App;
