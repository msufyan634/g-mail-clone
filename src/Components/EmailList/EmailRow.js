import React from 'react';
import './EmailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectMail} from '../../features/mailSlice'

const EmailRow = ({id,title,subject,message,time}) => {
     const dispatch=useDispatch();
     const history=useHistory();
     const openMail=()=>{
         dispatch(
             selectMail({
             id,
             title,
             subject,
             message,
             time,
             })
       
     );
     history.push("/mail");
    }
   
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
            </div>
            <h3 className="emailRow__tilte">
               {title}
            </h3>
            <div className="emailRow__message">
            <h4>
             {message}
            <span className="emailRow__description">
               {subject}
            </span>
            </h4>
            </div>
            <div className="emailRow__time">
              {time}
            </div>
        </div>
    )
}

export default EmailRow
