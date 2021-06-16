import React from "react";
import "./Header.css";
import {Avatar,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {logout,selectUser} from '../../features/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import { auth } from "../../firebase";
const Header = () => {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  const signOut=()=>{
    auth.signOut().then(()=>{
      dispatch(logout());
    })
  
  }
    return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="/assets/download.png" alt=""></img>
      </div> 
      <div className="header__middle">
        <SearchIcon/>
        <input placeholder="Search mail" type="text"/>
        <ArrowDropDownIcon className="header__inputCaret"/>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} style={{cursor:'pointer'}}/>
      </div>
    </div>
  );
};
export default Header;
