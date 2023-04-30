import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button,Box, Step, Stepper} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./NotLoginRight.module.css";
import { Link } from "react-router-dom";
function NotLogin() {
  const data = ["", "or", ""];
  return (
    <div>
      <Box  className = {styles.card}>
        <div className={styles.container}>
       
        <h1>New On Twitter ?</h1>
        <Button className={styles.btn} variant="contained">
          {" "}
          <GoogleIcon /> Signin with Gmail
        </Button>
        <br />
        <Button className={styles.btn} variant="contained">
          <AppleIcon />
          Sign in with Apple
        </Button>
        
        
          
          <Stepper className={ styles.stepper}>
            {data.map((label) => (
              <Step className={ styles.stepper}  key={label}>{label} </Step>
            ))}
          </Stepper>
         
          
            
            <Link className={styles.btn} to="/signup">
              <Button sx={{width:"100%"}}className={styles.btn} variant="contained">
                Create account
              </Button>
              </Link>
            <br />
          
            
            <p>
              By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy, </a>including Cookie Use.
            </p>
          
         
            <p>Have an account already? <Link className={styles.register} to="/">SignIn</Link></p>
         
        
      </div>
      </Box>
    </div>
  );
}

export default NotLogin;