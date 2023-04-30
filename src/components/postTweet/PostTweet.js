import React, { useState } from 'react';
import styles from './PostTweet.module.css';
import { Avatar, Button } from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PostTweet() {
  const [tweetText, setTweetText] = useState('');
  const [tweetImage, setTweetImage] = useState(null);
  const [tweets, setTweets] = useState([]);

  const handleTweet = (event) => {
    event.preventDefault();
    const newTweet = {
      text: tweetText,
      image: tweetImage,
      time: new Date().toLocaleString()
    };
    setTweets([newTweet, ...tweets]);
    setTweetText('');
    setTweetImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTweetImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
   <div>
      
      <div className={styles.header}>
        
        <div className={styles.postTweet}>
          <Avatar
            alt="Remy Sharp"
            className={styles.avatar}
            src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "90px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              marginLeft: "28px",
            }}
          >
            Everyone
            <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className={styles.tweetInput}>
          <input
            type="text"
            value={tweetText}
            placeholder="What's happening"
            onChange={(event)=>setTweetText(event.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "190px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              border: "none",
              margin: "0px",
            }}
          >
            <PublicIcon sx={{ height: "15px" }} />
            Everyone can reply
          </Button>
         
        </div>
       
        <div className={styles.Btns}>
       
          <div className={styles.btn1}>
          <hr/>
            <label htmlFor="fileInput">
              <CollectionsIcon
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#1DA1F2",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "lightskyblue",
                  },
                }}
              />
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <GifIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <PollIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <SentimentSatisfiedAltIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <DateRangeIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <LocationOnIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
          </div>
          <div className={styles.btn2}>
            <Button
              sx={{
                backgroundColor: "#1DA1F2",
                color: "White",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#0e8db7",
                },
              }}
              onClick={handleTweet}
            >
              Tweet
            </Button>
          </div>
        </div>
       
      </div>
      <div className={styles.tweet} >
        {tweets.map((tweet, index) => (
          <div key={index}>
            <div >
              <p>{tweet.text}</p>
              <small>{tweet.time}</small>
            </div >
            <div className={styles.image}>
            {tweet.image && <img  className={styles.image} src={tweet.image} alt="Tweet" />}
            </div>
           
          </div>
          
        ))}
        <hr></hr> 
      </div>
      
    </div>
  );
}
