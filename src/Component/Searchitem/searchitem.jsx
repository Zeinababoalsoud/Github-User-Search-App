
import "./searchitem.css"
import searchIcon from "../../../public/images/Combined Shape.png"
import { useState } from 'react';
function SearchBar() {
   const [ formData , setFormData ] = useState({
      searchlink:'',
      

  })
  function onHandleSubmit(event){
      event.preventDefault();
      console.log(formData);
  }
  function handleOnChange(event){
      var value = event.target.value;
      const key   =event.target.name;
      setFormData({
          ...formData ,
          [key] :value,
      });
   
  }
    return (
       <form 
       className="search" 
       onSubmit={onHandleSubmit} 
       id="form">  
         <div className="search-tool">
            <img className="search-icon" src={searchIcon}/>
            <input 
            className="search-field" 
            type="text" 
            placeholder="Search GitHub username..."
            value={formData.searchlink}
            id="inp1"
            name="searchlink"
            onChange={handleOnChange}
            required></input>
         </div>
         <button className="search-btn">Search</button>
       </form>
    )
}

export default SearchBar;