import "./App.css";
import {  Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import Home from "./pages/homePage/Home.jsx";
import CreateAccount from "./pages/createAccount/CreateAccount";
function App() {
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