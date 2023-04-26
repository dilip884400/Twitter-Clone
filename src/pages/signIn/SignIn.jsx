import React, { useRef, useState } from "react";
import styles from "./SignIn.module.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button,TextField,Box, Card,Stepper,Step } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Twitter';
import {FaTwitter} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import ClearIcon from '@mui/icons-material/Clear';

const Login = () => {

  const dataa = [
    "","or",""
   ];
  const obj = {
    email: "",
    password: "",
  };

  const [errors, setErrors] = useState({});
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
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
    // <div>
    //   <div>
    //     <Card sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
    //       <div className={styles.main}>
    //         <clearIcon sx={{ display: "inline-block", cursor: "pointer"}}  />
    //           <div className={styles.container}>
    //             <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
    //             <h1>Sign in to Twitter</h1>
    //             <Button className={styles.btn}  variant="contained">{" "}
    //                 <GoogleIcon/> Signin with Gmail
    //             </Button><br/>
    //             <Button className={styles.btn}  variant="contained"><AppleIcon/>Sign in with Apple</Button><br/>
    //             <form onSubmit={handlesubmit} >
                  // <Stepper >
                  //   {data.map((label) => (
                  //   <Step key={label}>{label} </Step>
                  //   ))}
                  // </Stepper>
    //               <TextField className={styles.input} type="email"
    //                    name="email" id="outlined-basic" label="email" variant="outlined"  onChange={handleChange} value={formValues.email}/>
    //                     <p>{errors.email}</p>
          
    //               <TextField className={styles.input} type="password"
    //                      name="password" id="outlined-basic" label="password" variant="outlined"  onChange={handleChange} value={formValues.password}/>
    //                      <p>{errors.password}</p>
                  
    //               <Button className={styles.btn}  variant="contained" >Login</Button><br/>
    //               <Button className={styles.btn}  variant="contained">Forgot Password</Button><br/>
    //             </form>
    //                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    //                <h1>{isUser}</h1>
    //           </div>
    //       </div>
    //     </Card>
    //   </div>
    // </div>
    
    <div>
      <Card sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
        <div className={styles.container}>
          
            
           <div> <ClearIcon sx={{ color:"white", cursor: "pointer",fontSize:45, textAlign:"start"}}  />
            <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
            </div>
                   <h1>Sign in to Twitter</h1>
              <Button className={styles.btn}  variant="contained">{" "}
                  <GoogleIcon/> Signin with Gmail
              </Button><br/>
              <Button className={styles.btn}  variant="contained"><AppleIcon/>Sign in with Apple</Button><br/>
              <form className={styles.container} onSubmit={handlesubmit}>
              <Stepper >
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
                  <Button className={styles.btn}  type="submit"  color='primary' variant="contained">LogIn</Button>
                  <Button className={styles.btn}  variant="contained">Forgot Password</Button><br/>
              </form> 
                 <h3>
                    Don't have an account? <Link  to="/signup">Register</Link>
                </h3>
                <h1>{isUser}</h1>
             
       
             </div>
        
      </Card>
    </div>
 
   
  );
};

export default Login;