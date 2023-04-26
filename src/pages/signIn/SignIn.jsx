import React, { useRef, useState } from "react";
import styles from "./SignIn.module.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button,TextField,Box} from "@mui/material"
import {FaTwitter} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
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
    <div className={styles.loginMian}>
      <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'white',
        border : '1px solid red'
      }}
    >
            <FaTwitter className=""/>
            <FcGoogle/>
        <form className={styles.loginContainer} onSubmit={handlesubmit}>
        
        <h1>Sign in to Twitter</h1>
           <TextField type="email"
            name="email" id="outlined-basic" label="email" variant="outlined"  onChange={handleChange} value={formValues.email}/>
          <p>{errors.email}</p>
          
           <TextField type="password"
            name="password" id="outlined-basic" label="password" variant="outlined"  onChange={handleChange} value={formValues.password}/>
          <p>{errors.password}</p>
          <Button type="submit" className={styles.loginButton} color='primary' variant="contained">LogIn</Button>
         
          <h3>
          Don't have an account? <Link className={styles.spanlogin} to="/signup">Register</Link>
        </h3>
        <h1>{isUser}</h1>
        </form>
       
        </Box>
      </div>
   
  );
};

export default Login;