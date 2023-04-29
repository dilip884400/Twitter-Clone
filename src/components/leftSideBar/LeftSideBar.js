import styles from "./LeftSideBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const LeftSideBar = () => {
  const isViewportBelow700 = useMediaQuery('(max-width:700px)');
  return (
<>
{ isViewportBelow700  ?

<div className={styles.sidebar}>
<ul className={styles.options}>
<TwitterIcon  className={styles.option} sx={{ color: "#42a5f5", fontSize: "3rem" }} />
  <li className={styles.option}>
    <HomeIcon sx={{ fontSize:35,marginRight:2 }}/>
   
  </li>
  <li className={styles.option}>
    <TagIcon sx={{ fontSize:35,marginRight:2 }}/>
    
  </li>
  <li className={styles.option}>
    <NotificationsNoneIcon sx={{ fontSize:35,marginRight:2 }}/>
   
  </li>
  <li className={styles.option}>
    <MailOutlineIcon sx={{ fontSize:35,marginRight:2 }} />
    
  </li>
  <li className={styles.option}>
    <BookmarkBorderIcon sx={{ fontSize:35,marginRight:2 }} />
    
  </li>
  <li className={styles.option}>
    <TwitterIcon sx={{ fontSize:35,marginRight:2 }}/>
    
  </li>
  <li className={styles.option}>
    <PersonIcon sx={{ fontSize:35 ,marginRight:2}} />
    
  </li>
  <li className={styles.option}>
    <MoreHorizIcon sx={{ fontSize:35,marginRight:2 }}/>
    
  </li>
  <li className={styles.option}>
    <AddIcon sx={{ fontSize:35,marginRight:2,backgroundColor:"#42a5f5"}}/>
    
  </li>
  
</ul>

</div>
    :


    <div className={styles.sidebar}>
      <ul className={styles.options}>
      <TwitterIcon  className={styles.option} sx={{ color: "#42a5f5", fontSize: "3rem" ,borderRadius:"20px"}} />
        <li className={styles.option}>
          <HomeIcon sx={{ fontSize:35,marginRight:2 }}/>
          Home
        </li>
        <li className={styles.option}>
          <TagIcon sx={{ fontSize:35,marginRight:2 }}/>
          Explore
        </li>
        <li className={styles.option}>
          <NotificationsNoneIcon sx={{ fontSize:35,marginRight:2 }}/>
          Notifications
        </li>
        <li className={styles.option}>
          <MailOutlineIcon sx={{ fontSize:35,marginRight:2 }} />
          Message
        </li>
        <li className={styles.option}>
          <BookmarkBorderIcon sx={{ fontSize:35,marginRight:2 }} />
          Bookmarks
        </li>
        <li className={styles.option}>
          <TwitterIcon sx={{ fontSize:35,marginRight:2 }}/>
          Twitter Blue
        </li>
        <li className={styles.option}>
          <PersonIcon sx={{ fontSize:35 ,marginRight:2}} />
          Profile
        </li>
        <li className={styles.option}>
          <MoreHorizIcon sx={{ fontSize:35,marginRight:2 }}/>
          More
        </li>
        <Button
          variant="contained"
          className={styles.btn}
          sx={{ textTransform: "none", borderRadius: "5rem", width: "50%",backgroundColor:"#42a5f5" }}
        >
          Tweet
        </Button>
      </ul>
     
    </div>
}
    </>
  );
};

export default LeftSideBar;