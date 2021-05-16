import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDateilsPage';


const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact to='/'>
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink to='/movies'>
          Movies Page
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/movies/:movieId' component={MovieDetailsPage}/>
      <Route path='/movies' component={MoviesPage} />
      <Route component={HomePage}/>
    </Switch>
  </>
);



export default App;
