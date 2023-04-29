import styles from "./LoginFooter.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";




const LoginFooter = () => {
  
  return (
<>


<div className={styles.sidebar}>
<ul className={styles.options}>

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
  
  
</ul>

</div>
    

    </>
  );
};

export default LoginFooter;