import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
import logo from '../assets/logo.png';
import logoMv from '../assets/logo-mv.png';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Container } from '@mui/material';

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className='navbar'>
      <Container>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={logo} alt="zidio-logo" className='brand-logo'/>
          <img src={logoMv} alt="zidio-logo-light" className='brand-logo-light' />
        </div>

        <div className='nav-list'>
          <ul className={isToggle ? 'nav-toggle-items' : 'nav-list-items'}>
            <Link to={"/"} className='nav-list-item'><li> Home </li></Link>
            <Link to={"/about"} className='nav-list-item'><li> About </li></Link>
            <Link to={"/services"} className='nav-list-item'><li> Services </li></Link>
            <Link to={"/contact"} className='nav-list-item'><li> Contact </li></Link>
          </ul>
          {search == true && <div><TextField onChange={()=>{setSearch(false)}} variant="standard"/></div>}
          {search == false && <div onClick={()=>{setSearch(true)}}><SearchIcon /></div>}
          <div className='nav-toggle-icon' onClick={() => setIsToggle(!isToggle)}>
            {isToggle ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
          </div>
        </div>
      </div>
      </Container>
      
    </nav>
  )
}

export default Header;