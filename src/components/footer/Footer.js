import React from "react";
import Style from "./Footer.module.css";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import Typography from "@mui/material/Typography";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";


const Footer = () => {

  const isViewportBelow600 = useMediaQuery('(max-width:600px)');
  
  return (
    <>
    { 
      isViewportBelow600 ?
      
      <Box
      className={Style.root}
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      
      <div  style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-between"}}>
        <Link to="/">
          <Button className={Style.btn} variant="contained" >
            Sign In
          </Button>
        </Link>

        <Link to="/joinus">
          <Button className={Style.btn} variant="contained">
            Sign Up
          </Button>
        </Link>
    </div>
</Box>     
   :
    <Box
      className={Style.root}
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <div className={Style.text}>
        <Typography variant="h5">Don't miss what's happening</Typography>
        <Typography variant="caption" fontSize={15}>People on Twitter are the first to know.</Typography>
      </div>
      <div   style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-between" }}>
        <Link to="/">
          <Button className={Style.btns} variant="contained">
            Sign In
          </Button>
        </Link>

        <Link to="/joinus">
          <Button className={Style.btns} variant="contained">
            Sign Up
          </Button>
        </Link>
      </div>
    </Box>
    }
     </>
  
  );
};

export default Footer;
