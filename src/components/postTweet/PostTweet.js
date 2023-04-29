import React, { useState } from 'react';
import styles from './PostTweet.module.css';
import { Avatar, Button } from '@mui/material';

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
    <div className={styles.postTweetContainer}>
      <form onSubmit={handleTweet}>
        <div className={styles.postTweetInput}>
          <Avatar src='https://media.licdn.com/dms/image/D5603AQEw7sH02YKzPw/profile-displayphoto-shrink_800_800/0/1675929751081?e=1687996800&v=beta&t=JNu96iTt8bGi-yRFDKCHZ3xIcch78Lom0DgMg4ULz80'/>
          <input type='text' placeholder="What's Happning" value={tweetText} onChange={(event) => setTweetText(event.target.value)} />
          <input type='file' accept='image/*' onChange={handleImageChange} />
        </div>
        <Button className={styles.tweetBtn} variant="contained" type="submit">Tweet</Button>
      </form>
      <div className={styles.tweetList}>
        {tweets.map((tweet, index) => (
          <div key={index} className={styles.tweet}>
            <div className={styles.tweetText}>
              <p>{tweet.text}</p>
              <small>{tweet.time}</small>
            </div>
            {tweet.image && <img src={tweet.image} alt="Tweet" />}
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from 'react'
// import styles from './PostTweet.module.css'
// import { Avatar, Button} from '@mui/material'

// export default function PostTweet() {
//   return (
//     <div className={styles.postTweetContainer}>
//       <form>
//         <div className={styles.postTweetInput}>
//            <Avatar src='https://media.licdn.com/dms/image/D5603AQEw7sH02YKzPw/profile-displayphoto-shrink_800_800/0/1675929751081?e=1687996800&v=beta&t=JNu96iTt8bGi-yRFDKCHZ3xIcch78Lom0DgMg4ULz80'/>
//            <input type='text' placeholder="What's Happning"/>
//         </div>
//         <Button className={styles.tweetBtn} variant="contained">Tweet</Button>
//       </form>
//     </div>
//   )
// }
