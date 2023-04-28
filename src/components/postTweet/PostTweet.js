import React from 'react'
import styles from './PostTweet.module.css'
import { Avatar, Button} from '@mui/material'

export default function PostTweet() {
  return (
    <div className={styles.postTweetContainer}>
      <form>
        <div className={styles.postTweetInput}>
           <Avatar src='https://media.licdn.com/dms/image/D5603AQEw7sH02YKzPw/profile-displayphoto-shrink_800_800/0/1675929751081?e=1687996800&v=beta&t=JNu96iTt8bGi-yRFDKCHZ3xIcch78Lom0DgMg4ULz80'/>
           <input type='text' placeholder="What's Happning"/>
        </div>
        <Button className={styles.tweetBtn} variant="contained">Tweet</Button>
      </form>
    </div>
  )
}
