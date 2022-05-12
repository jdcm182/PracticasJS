import React from 'react';
//import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';

function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <div className={style.containerLogoTitle}>
        {/* <img className="logo" src={Logo} alt="Henry Logo" /> */}
        <h1>React App</h1>
      </div>
      <div className={style.search}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
