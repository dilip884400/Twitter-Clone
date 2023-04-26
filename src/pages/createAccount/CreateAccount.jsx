import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Card, Step, Stepper, TextField } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./CreateAccount.module.css";
import { Link } from "react-router-dom";
function CreateAccount() {
  const data = ["", "or", ""];
  return (
    <div className={styles.container}>
      <div className={styles.twittericon}>
        <TwitterIcon sx={{ color: "rgb(25 161 242)", fontSize: 45 }} />
        <h1>Join Twitter today</h1>
        <button className={styles.btn1} variant="contained">
          {" "}
          <GoogleIcon /> Signin with Gmail
        </button>
        <br />
        <button className={styles.btn2} variant="contained">
          <AppleIcon />
          Sign in with Apple
        </button>
        <br />
        <form>
          <Stepper>
            {data.map((label) => (
              <Step key={label}>{label} </Step>
            ))}
          </Stepper>
          <div>
            {" "}
            <Link to="/signup">
              <button className={styles.btn3} variant="contained">
                Create account
              </button>
              </Link>
            <br />
          </div>
          <div className={styles.privacy}>
            <p>
              By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy, </a>including Cookie Use.
            </p>
          </div>
          <div>
            <p>Have an account already? <Link className={styles.register} to="/signin">SignIn</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
