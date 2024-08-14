import "./toggleButton.css";
import {ThemeContext} from '../../App';
import { useContext } from 'react';
import moonImg from '../../assets/images/moon.svg'
import sunImg from '../../assets/images/002-sun.svg'

function ToggleButton() {
  const themeContext = useContext(ThemeContext);

  function handleOnChange() {
    let newValue;
    if (themeContext.theme == "light") {
      newValue = "dark";
    } else {
      newValue = "light";
    }
    themeContext.setTheme(newValue);
  }

  return (
   
   
<button className='toggleBtn' onClick={handleOnChange}>
  {themeContext.theme == "light" ? (
    <>
      <span >Light</span>
      <img src={sunImg} />
    </>
  ) : (
    <>
      <label>Dark</label>
      <img  src={moonImg} />
    </>
  )}
</button>

);

}

export default ToggleButton;