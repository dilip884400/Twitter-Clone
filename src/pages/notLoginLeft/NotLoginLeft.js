import styles from "./NotLoginLeft.module.css";

import TagIcon from "@mui/icons-material/Tag";

import TwitterIcon from "@mui/icons-material/Twitter";
import SettingsIcon from '@mui/icons-material/Settings';

import { Button } from "@mui/material";

const NotLoginLeft = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.options}>
      <TwitterIcon  className={styles.option} sx={{ color: "#42a5f5", fontSize: "3rem" }} />
       
        <li className={styles.option}>
          <TagIcon sx={{ fontSize:35,marginRight:2 }}/>
          Explore
        </li>
       
        
        <li className={styles.option}>
          <SettingsIcon sx={{ fontSize:35 ,marginRight:2}} />
          Settings
        </li>
       
       
      </ul>
     
    </div>
  );
};

export default NotLoginLeft;