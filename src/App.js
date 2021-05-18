import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDateilsPage';


const App = () => (
  <div className='container'>
    <ul className='NavList'>
      <li className='NavList--item'>
        <NavLink exact to='/' className='NavLink' activeClassName='NavLink--active'>
          Home Page
        </NavLink>
      </li>
      <li className='NavList--item'>
        <NavLink to='/movies' className='NavLink' activeClassName='NavLink--active'>
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
  </div>
);



export default App;
