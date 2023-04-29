import "./App.css";
import {  Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import Home from "./pages/homePage/Home.jsx";
import CreateAccount from "./pages/createAccount/CreateAccount";
import { useSetRecoilState} from "recoil";

import { useEffect } from "react";
import { tweetsAtom } from "./recoil/TweetsRecoil";
import { usersAtom } from "./recoil/UsersRecoil";
import { fetchTweets } from "./services/Tweets";
import { fetchUsers } from "./services/Users";
// import { api } from "./services/Api";
function App() {
  // const setTweets = useRecoilState(tweetsAtom)
  // const setUsers = useRecoilState(usersAtom)
  const setTweets = useSetRecoilState(tweetsAtom)
  const setUsers = useSetRecoilState(usersAtom)
  
    useEffect(()=>{
      fetchTweets().then((tweets)=>{
        console.log(tweets)
       setTweets(tweets)
      });
      fetchUsers().then((users)=>{
       setUsers(users)
      });
  },[])
  return (
    <div className="App">
   
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/joinus" element={<CreateAccount/>} />
        </Routes>
     
    </div>
  );
}

export default App;