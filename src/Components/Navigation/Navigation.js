import { NavLink } from "react-router-dom"


const Navigation = () => {
    return (        
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
    )
}

export default Navigation