import './maincontainer.css'
import Navbar from '../navbar/navbar'
import SearchItem from '../searchItem/searchitem';
import ProfileContent from '../profileContent/profileContent';
import {ThemeContext} from '../../App';
import { useContext } from 'react';

function MainContainer(props){
    const passValues = useContext(ThemeContext);

    return(
        <main  className={passValues.theme +'header'}>
            <div className='container'>
                <Navbar></Navbar>
                <SearchItem></SearchItem>
                <ProfileContent></ProfileContent>

            </div>
        </main>
    )
}
export default MainContainer;