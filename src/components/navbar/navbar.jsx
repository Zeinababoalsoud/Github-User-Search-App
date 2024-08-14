import './navbar.css';
import ToggleButton from '../toggleButton/toggeleButton';

function Navbar(){
    return(
        <nav>
            <label className='logo'>devfinder</label>
            <ToggleButton></ToggleButton>
            

        </nav>
    )
}
export default Navbar;