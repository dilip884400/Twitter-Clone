import React, {  useState } from "react";
import styles from "./SignIn.module.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button,TextField,Box,Stepper,Step } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { isLogin } from "../Atom"
import { useRecoilState } from "recoil";



const Login = () => {

  const dataa = [
    "","or",""
   ];
  const obj = {
    email: "",
    password: "",
  };
  const [login,setLogin]=useRecoilState(isLogin)
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [isUser, setIsuser] = useState("");
  const [formValues, setFormValues] = useState(obj);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    obj[name] = value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

    const handlesubmit = (e) => {
    e.preventDefault();
    const error = validate(formValues);
    if (Object.keys(error).length !== 0) {
      setErrors(error);

      return;
    }

    const user = FindUser(data);
    if (user) {
      setIsuser("Login SuccesFully");
      setTimeout(() => {
        Navigate("/home");
        setLogin(true)
      }, 500);
    } else {
      setIsuser("something went wrong");
    }

    setFormValues(obj);
  };

  const validate = (validate) => {
    const error = {};
    const email = validate.email;
    const password = validate.password;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      error.email = "email is required !";
    } else if (!regex.test(email)) {
      error.email = "this email is not valid !";
    }

    if (!password) {
      error.password = "Password is required !";
    } else if (password.length < 6) {
      error.password = "Password should be greater than 6";
    } else if (password.length > 16) {
      error.password = "password should be less than 16";
    }

    return error;
  };

  const FindUser = (data) => {
    const value = data.find(
      (user) =>
        user.email === formValues.email && user.password === formValues.password
    );
    return value;
  };

  return (
    <div>
      <Box sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
        <div className={styles.container}>
          
            <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
            
                   <h1>Sign in to Twitter</h1>
              <Button className={styles.btn}  variant="contained">
                  <GoogleIcon/> Signin with Gmail
              </Button><br/>
              <Button className={styles.btn} variant="contained">
               <AppleIcon /> Sign in with Apple</Button>
              <form className={styles.container} onSubmit={handlesubmit}>
              <Stepper className={ styles.stepper} >
                    {dataa.map((label) => (
                    <Step key={label}>{label} </Step>
                    ))}
                  </Stepper>
        
                  <TextField className={styles.input}  type="email"
                    name="email" id="outlined-basic" label="email" variant="outlined"  onChange={handleChange} value={formValues.email}/>
                   <p>{errors.email}</p>
          
                  <TextField className={styles.input}  type="password"
                      name="password" id="outlined-basic" label="password" variant="outlined"  onChange={handleChange} value={formValues.password}/>
                      <p>{errors.password}</p>
                      <h2 className={styles.h2}>{isUser}</h2>
                  <Button className={styles.btn}  type="submit"  color='primary' variant="contained">LogIn</Button>
                  <Button className={styles.btn}  variant="contained">Forgot Password</Button><br/>
              </form> 
                 <h3>
                    Don't have an account? <Link  to="/joinus">Join Us</Link>
                </h3>
                
             
       
             </div>
        
      </Box>
    </div>
 
   
  );
};

export default Login;