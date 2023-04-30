
import  PopupState, { popupState } from "material-ui-popup-state";

import styles from "./LeftSideBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Dialog, Popover, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Modal } from "antd";
import { isLogin } from "../../pages/Atom";
import { useRecoilState } from "recoil";
import React from "react";
import { bindPopover, bindTrigger } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const isViewportBelow700 = useMediaQuery('(max-width:700px)');

  const [islogin, setisLogin] = useRecoilState(isLogin);
  
  
  const [logOutopen, setlogOutopen] = React.useState(false);
  const handlelogOutOpen = () => setlogOutopen(true);
  const handlelogOutClose = () => setlogOutopen(false);
  // let nam = JSON.parse(localStorage.getItem("name"));
  // let names = nam.name;
  let Navigate=useNavigate()
  function handleLogout() {
    setisLogin(false);
    Navigate("/")
    
  }
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
  <PopupState
          variant="popover"
          popupId="demo-popup-popover"
          sx={{ backgroundColor: "red" }}
        >
          {(popupState) => (
            <div>
              <Button
                // variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  textTransform: "none",
                  borderRadius: "5rem",
                  marginTop: "10rem",
                  left:"40%",
                  width: "100%",
                 backgroundColor:"rgb(193, 186, 186)",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className={styles.avatar}
                    src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
                  />
                  <div>
                 
                  </div>
                </div>
                <MoreHorizIcon />
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{ height: "200px" }}
              >
                <Button
                  sx={{ display: "block", width: "100%" }}
                 
                >
                  ADD
                </Button>
                <Dialog
                  open={logOutopen}
                  onClose={handlelogOutClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <p style={{ width: "100%", textAlign: "center" }}>
                      <TwitterIcon sx={{ color: "#42a5f5" }} />
                    </p>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      Log out of Twitter?
                    </h2>
                    <p>
                      You can always log back in at any time. If you just want
                      to switch accounts, you can do that by adding an existing
                      account.
                    </p>
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button onClose={handlelogOutClose}>Cancle</Button>
                  </Box>
                </Dialog>
                <Button onClick={handlelogOutOpen}>Logout</Button>
              </Popover>
            </div>
          )}
        </PopupState>
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
        <PopupState
          variant="popover"
          popupId="demo-popup-popover"
          sx={{ backgroundColor: "red" }}
        >
          {(popupState) => (
            <div>
              <Button
                // variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  textTransform: "none",
                  borderRadius: "5rem",
                  marginTop: "10rem",
                  left:"40%",
                  width: "100%",
                 backgroundColor:"rgb(193, 186, 186)",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className={styles.avatar}
                    src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
                  />
                  <div>
                  <span style={{ display: "block" }}></span>
                    <span style={{ fontSize: "20px" }}>@Darshan4943</span>
                  </div>
                </div>
                <MoreHorizIcon />
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{ height: "200px" }}
              >
                <Button
                  sx={{ display: "block", width: "100%" }}
                 
                >
                  ADD
                </Button>
                <Button onClick={handlelogOutOpen}>Logout</Button>
                <Dialog
                  open={logOutopen}
                  onClose={handlelogOutClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <p style={{ width: "100%", textAlign: "center" }}>
                      <TwitterIcon sx={{ color: "#42a5f5" }} />
                    </p>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      Log out of Twitter?
                    </h2>
                    <p>
                      You can always log back in at any time. If you just want
                      to switch accounts, you can do that by adding an existing
                      account.
                    </p>
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button onClose={handlelogOutClose}>Cancle</Button>
                  </Box>
                </Dialog>
               
              </Popover>
            </div>
          )}
        </PopupState>
      </ul>
      
     
    </div>
}
    </>
  );
};

export default LeftSideBar;