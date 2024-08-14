import "./toggleButton.css";
import {ThemeContext} from '../../App';
import { useContext } from 'react';
import moonImg from '../../assets/images/moon.svg'

function ToggleButton() {
  const theme =useContext(ThemeContext);

  function onHandleChange(event) {
    let newValue ;
    if(event.target.checked ==true ) {
      newValue ='light';
      
    }else{
      newValue ='dark';
    }
    console.log(newValue);
    theme.setTheme(newValue);
    
  }
  return (
   
    <button className='toggleBtn'onClick={onHandleChange}>
        <span>Dark</span>

        <img src={moonImg}/>
   </button>
  );
}

export default ToggleButton;