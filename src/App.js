import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Components/Navigation'

// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDateilsPage';


const MoviesPage = lazy(() => import('./pages/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.js'));
const HomePage = lazy(() => import('./pages/HomePage.js'));


const App = () => (
  <div className='container'>
    <Navigation />
    <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/movies/:movieId' component={MovieDetailsPage}/>
      <Route path='/movies' component={MoviesPage} />
      <Route component={HomePage}/>
      </Switch>
    </Suspense>
  </div>
);



export default App;
