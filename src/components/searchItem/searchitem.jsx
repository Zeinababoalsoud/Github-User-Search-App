import './searchitem.css';
import searchIcon from '../../assets/images/Shape 2.png';
import {ThemeContext} from '../../App';
import { useContext } from 'react';
function SearchItem (props){
    const passValues = useContext(ThemeContext);
    return(
        <div id='searchcontainer' className ={passValues.theme+'search'}>
            <div className='inputDiv'>
                <img src={searchIcon} className='searchImg'/>
                <input type="text" placeholder='Search GitHub username...'/>

            </div>
            <div className="searchBtn">
                <button className='search-btn'>Search</button>
            </div>
        </div>
    )
}
export default SearchItem;