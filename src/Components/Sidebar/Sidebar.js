import React from "react";
import './Sidebar.css'
import Sidebaroption from './Sidebaroption';
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import {useDispatch} from "react-redux"
import {openSendMessage} from "../../features/mailSlice"



const Sidebar = () => {
  const dispatch=useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="lg" />}   className="sidebar__compose" 
        onClick={()=>dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <Sidebaroption Icon={InboxIcon} title="Inbox" number={54} 
      selected={true}/>
      <Sidebaroption Icon={StarIcon} title="Starred" number={54}/>
      <Sidebaroption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
      <Sidebaroption Icon={LabelImportantIcon} title="Important" number={54}/>
      <Sidebaroption Icon={NearMeIcon} title="Sent" number={54}/>
      <Sidebaroption Icon={NoteIcon} title="Drafts" number={54}/>
      <Sidebaroption Icon={ExpandMoreIcon} title="More" number={54}/>

      <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
              <IconButton>
                  <PersonIcon/>
              </IconButton>
              <IconButton>
                  <DuoIcon/>
              </IconButton>
              <IconButton>
                  <PhoneIcon/>
              </IconButton>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
