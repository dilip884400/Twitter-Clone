import React from 'react';
import Styles from "./RightSideBar.module.css";
import { Search } from "@mui/icons-material";


function RightSideBar(){
 
  return (
    <div className={Styles.RightMain}>
  
      <Search/>
      <Trends/>
      <Righthomebox2/>
  
    </div>
  )
}

export default RightSideBar;
