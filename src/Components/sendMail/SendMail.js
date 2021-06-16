import React, { useState } from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import {closeSendMessage} from '../../features/mailSlice'
import { useDispatch } from "react-redux";
import {db} from '../../firebase';
import firebase from 'firebase';
const SendMail = () => {
  const dispatch=useDispatch();
  const [toError,setToError]=useState('');
  const [subjectError,setSubjectError]=useState('');
  const [messageError,setMessageError]=useState('');
  const [toInputData,setToInputData]=useState('');
  const [subjectInputData,setSubjectInputData]=useState('');
  const [messageInputData,setMessageInputData]=useState('');
  const handleToChange=(e)=>{
    setToError('');
    setToInputData(e.target.value);
  }
  const handleSubjectChange=(e)=>{
    setSubjectError('');
    setSubjectInputData(e.target.value);
  }
  const handleMessageChange=(e)=>{
    setMessageError('');
    setMessageInputData(e.target.value);
  } 
  const submitForm=(event)=>{
    console.log("db",db);
    event.preventDefault();
    if(toInputData===''){
      setToError("To is Required")

    }else if(subjectInputData===''){
      
      setSubjectError("Subject is Required")
    }else if(messageInputData===''){
      setMessageError("Message is Required")
    }
    else{
      db.collection('mail').add({
        to:toInputData,
        subject:subjectInputData,
        message:messageInputData,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             }).then((e)=>console.log(e)).catch((e)=>console.log(e));
    }if(toInputData!=='' && messageInputData!=='' & subjectInputData!==''){
       dispatch(closeSendMessage());
      }
  }
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={()=>dispatch(closeSendMessage())}/>
      </div>
      <form onSubmit={submitForm}>
        <input name="to" placeholder="To" type="email" 
        value={toInputData}
        onChange={handleToChange} />
        {toError && <p className="sendMail__error">{toError}</p>}
        <input name="subject" placeholder="Subject" type="text" 
        value={subjectInputData}
        onChange={handleSubjectChange}  />
         {subjectError && <p className="sendMail__error">{subjectError}</p>}
        <input
          name="message"
          placeholder="Message..."
          type="text" 
          className="sendMail__message"
          value={messageInputData}
          onChange={handleMessageChange}
        />
           {messageError && <p className="sendMail__error">{messageError}</p>}
        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
