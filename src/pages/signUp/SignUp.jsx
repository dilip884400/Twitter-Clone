import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { Button, TextField,Box} from "@mui/material";

import { Days, Month, Year } from "../../component/data/data";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  const [isuserPresent, setIsuserPresent] = useState(false);
  const [isregister, setIsregister] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsuserPresent(false);
    setIsregister(false);

    const error = Validation(formValues);
    if (Object.keys(error).length === 0) {
      const result = userFind(formValues.email);

      if (result) {
        setIsuserPresent(true);

        return;
      }

      setUserdata([...userdata, formValues]);
      localStorage.setItem(
        "userdata",
        JSON.stringify([...userdata, formValues])
      );
      setIsregister(true);

      setFormValues({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setError({});
    } else {
      setError(error);
    }
  };

  const Validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "username is required !";
    }

    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not valid email";
    }

    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 6) {
      errors.password = "Password should be greater than 6 character";
    } else if (values.password.length > 16) {
      errors.password = "Password should be less than 16 character";
    } else if (
      values.password.includes(123) ||
      values.password.includes(1234) ||
      values.password.includes(123456) ||
      values.password.includes(12345678)
    ) {
      errors.password = "Password should be Unique";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password doesn't match";
    }

    return errors;
  };

  const userFind = (email) => {
    const data = userdata;

    let result = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        result = true;
        break;
      }
    }
    return result;
  };

  return (
    <div >
      <Box sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
        <div className={styles.container} >
          <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Create your account</h1>

            <TextField className={styles.input}  type="username"
                    name="username" id="outlined-basic" label="Usename" variant="outlined"  onChange={handleChange}  value={formValues.username}/>
                <p className={styles.errorMessage}>{error.username}</p>
        
            <TextField className={styles.input}  type="email"
                    name="email" id="outlined-basic" label="email" variant="outlined"  onChange={handleChange} value={formValues.email}/>
                  <p className={styles.errorMessage}>{error.email}</p>
       
            <TextField className={styles.input}  type="password"
                    name="password" id="outlined-basic" label="Password" variant="outlined"  onChange={handleChange} value={formValues.password}/>
                 <p className={styles.errorMessage}>{error.password}</p>

            <TextField className={styles.input}  type="password"
                    name="confirmPassword" id="outlined-basic" label="Confirm Password" variant="outlined"  onChange={handleChange} value={formValues.confirmPassword}/>
                 <p className={styles.errorMessage}>{error.confirmPassword}</p>
       
           <div className={styles.Calender}>
               <select>
                  <option>Day</option>
                     {Days.map((ele) => (
                      <option>{ele}</option>
                     ))}
               </select>

               <select>
                   <option>Month</option>
                      {Month.map((ele) => (
                         <option>{ele}</option>
                     ))}
               </select>

               <select>
                  <option>Year</option>
                      {Year.map((ele) => (
                      <option>{ele}</option>
                  ))}
               </select>
            </div>
          
          <Button type="submit" className={styles.btn}>
               Register
             </Button>
             </form>
            <h3>
               Already have an account?{" "}
                <Link className={styles.spanlogin} to="/">
                 Login
               </Link>
            </h3>
                <h2>{isuserPresent ? "User Already exits please login" : ""}</h2>
                <h2>{isregister ? "Registration succesfully" : ""}</h2>
        </div>
      </Box>
    </div>
  );
};

export default Register;