import React, { useState } from "react";

import styles from "./SignUp.module.css";
import { Box, Button, TextField } from "@mui/material";
import { Days, Month, Year } from "../Data/AtomData/Data"
import { useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';


const SignUp = () => {
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    month: "",
    year: "",
  });

  function handleName(e) {
    const input = { ...data };
    input.name = e.target.value;
    setData(input);
  }

  function handleEmail(e) {
    const input = { ...data };
    input.email = e.target.value;
    setData(input);
  }

  function handlePassword(e) {
    const input = { ...data };
    input.password = e.target.value;
    setData(input);
  }

  function handleDate(e) {
    const input = { ...data };
    input.date = e.target.value;
    setData(input);
  }

  function handleMonth(e) {
    const input = { ...data };
    input.month = e.target.value;
    setData(input);
  }

  function handleYear(e) {
    const input = { ...data };
    input.year = e.target.value;
    setData(input);
  }

  function getData() {
    const users = localStorage.getItem("users");
    if (users) {
      try {
        return JSON.parse(users);
      } catch {
        return [];
      }
    }
    return [];
  }

  function handleSubmit(e) {
    e.preventDefault();

    const ValidMonth = [
      "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December",
    ];

    let leapYear = true;
    let year = data.year;

    if ((year % 100 === 0 && year % 400 === 0) || year % 4 === 0) {
      leapYear = true;
    } else {
      leapYear = false;
    }

    const users = getData();
    if (
      !data.name ||
      data.name === " " ||
      !data.email ||
      !data.password ||
      !data.date ||
      data.name === "Day" ||
      !data.month ||
      data.month === "Month" ||
      !data.year ||
      data.year === "Year"
    ) {
      alert("Please Fill All the deatails!!");
    } else if (data.password.length < 8) {
      alert("Password Should contains 8 letter");
    } else if (
      leapYear === false &&
      data.month === "February" &&
      data.date > 28
    ) {
      alert("Enter Valid date");
    } else if (leapYear === true && data.month === "February" && data.date > 29) {
      alert("Enter Valid date");
    } else if (ValidMonth.includes(data.month) === false && data.date > 30) {
      alert("Enter Valid date");
    } else {
      alert("registeration success");
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/")
    }
  }

  return (
    <div >
    <Box sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
      <div className={styles.container} >
      <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
          <h1>Sign in to Twitter</h1>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
          <TextField className={styles.input} 
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => handleName(e)}
          />
          <TextField className={styles.input} 
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => handleEmail(e)}
          />
          <TextField className={styles.input} 
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => handlePassword(e)}
          />
          <div className={styles.Calender}>
            <select onChange={(e) => handleMonth(e)}>
              <option>Month</option>
              {Month.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select onChange={(e) => handleDate(e)}>
              <option>Day</option>
              {Days.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select onChange={(e) => handleYear(e)}>
              <option>Year</option>
              {Year.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>
          </div>

          <Button className={styles.btn}  variant="contained" type="submit">
            Register
          </Button>
        </form>
      

      <div className={styles.switch}>
        <span>Already Have an Account?</span> &nbsp;
        <span onClick={() => navigate("/")}>Sign In</span>
      </div>
      </div>
      </Box>
    </div>
  );
};

export default SignUp;