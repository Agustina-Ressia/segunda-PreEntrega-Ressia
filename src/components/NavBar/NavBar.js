import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav  className="NavBar">
            <Link to='/'>
                <h3>Red Mangas</h3>
            </Link>
            <div className="categories">
                <NavLink to={'/category/Shonen'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shonen</NavLink>
                <NavLink to={'/category/Seinen'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Seinen</NavLink>
                <NavLink to={'/category/Josei'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Josei</NavLink>
            </div>
            <carteWidget/>
        </nav>
    )
}

export default NavBar