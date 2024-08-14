import './App.css'
import MainContainer from './components/maincontainer/maincontainer'
// import ToggleButton from './components/toggleButton/toggeleButton';
import {useState , createContext } from "react";
 export const ThemeContext = createContext(null);

function App() {
  const [theme ,setTheme] = useState('light');


  return (
    <>
        <ThemeContext.Provider value={{theme ,setTheme}}>
          <MainContainer></MainContainer>
      </ThemeContext.Provider>

    </>
  )
}

export default App
