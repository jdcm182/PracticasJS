import React, { useState } from "react";
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState('');


  /* const inputSearch = document.querySelector('#searchBox');
  inputSearch.value = 'Cairns'; */

  var tempSearch = '';
  let handleChange = (e) => {
    //this.setCity({
    //mensaje:e.target.value;
    tempSearch = e.target.value;
    console.log('SearchBar > input onChange > handleChange > tempSearch: ', tempSearch);
    //changeCity();
    //changeCity(e.target.value);
    setCity(tempSearch);
  };
  /* let changeCity = (newCity) => {
    setCity((oldCity) => {
      console.log(`Changing ${oldCity}`);
      oldCity = tempSearch;
    })
  } */
  let changeCity = (newCity) => {
    setCity((oldCity, neww) => {
      console.log(`Changing ${oldCity}`);
      oldCity = neww;
    })
  }





  return (
    <form onSubmit={(e) => {
      e.preventDefault();        // ¿¿¿¿Que es el preventDefault??????
      //onSearch("Cairns");
      onSearch(city);
      console.log('form onSubmit > onSearch > city: ', city);
    }}>

      {/* <div className={style.searchBar}>
        <BiMapPin className={style.icon} />
        <input className={style.input} type="text" placeholder='City...' />
        <button className={style.submit} onClick={() => onSearch('Denver')}>
          <BiSearchAlt />
        </button>
      </div> */}

      <div className={style.container}>
        <input
          id='searchBox'
          className={style.input}
          type="text"
          placeholder="Ciudad..."
          onChange={handleChange}
        />
        <input className={style.submit} type="submit" value="Agregar" />
      </div>
    </form>
  );
}

/* 
export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
*/