import React, {useState} from 'react';
import "./Header.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

   const[inputSearch,setInputSearch] = useState("");
  return (
    
    <div className='header'>
    <div className='header__left'>
    <MenuOutlinedIcon/>
    <Link to="/">
    <img 
    className='header__logo'
    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="youtube logo"/>
    </Link>
  
    </div>

    <div className='header__input'>
    <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text"/>

    <Link to={`/search/${inputSearch}`}>
    <SearchOutlinedIcon className='header__inputButton'/>
    </Link>
    </div>

    <div className='header__icons'>
    <VideoCallOutlinedIcon className='header__icon'/>
    <NotificationsNoneOutlinedIcon className='header__icon'/>
    {/* <button>Dark mode</button> */}
    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABxEMu4GRwpNWC8OndvH_fuF5z5r5yQmEaA&usqp=CAU" />
    </div>
    </div>
  
  )
}

export default Header