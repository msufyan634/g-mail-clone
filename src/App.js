import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mail from "./Components/Mail/Mail";
import EmailList from "./Components/EmailList/EmailList";
import SendMail from './Components/sendMail/SendMail';
import Login from './Components/Login/Login'
import  {selectSendMessageIsOpen} from './features/mailSlice'
import { useSelector } from "react-redux";
import  {selectUser} from './features/userSlice'
function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen);
  const user=useSelector(selectUser);
  return (
    <Router>
    {!user?(
      <Login/>
    ):(
      <div className="app">
        <Header />
        <div className="app__body">
        <Sidebar />
       
       <Switch>
         <Route path="/mail">
           <Mail/>
         </Route>
         <Route path="/">
           <EmailList/>
         </Route>
       </Switch>
      </div>
       {sendMessageIsOpen && <SendMail/>}  
      </div>
    )}

    </Router>
  );
}

export default App;
