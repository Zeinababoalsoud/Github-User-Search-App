import "./toggleButton.css";
import {ThemeContext} from '../../App';
import { useContext } from 'react';
import moonImg from '../../assets/images/moon.svg'
import sunImg from '../../assets/images/002-sun.svg'

function ToggleButton() {
  const themeContext = useContext(ThemeContext);

  function handleOnChange() {
    let newValue;
    if (themeContext.theme == "dark") {
      newValue = "light";
    } else {
      newValue = "dark";
    }
    themeContext.setTheme(newValue);
  }

  return (
   
   
<button className='toggleBtn' onClick={handleOnChange}>
  {themeContext.theme == "light" ? (
    <>
      <span >Dark</span>
      <img src={moonImg} />
    </>
  ) : (
    <>
      <span>Light</span>
      <img  src={sunImg} />
    </>
  )}
</button>

);

}

export default ToggleButton;