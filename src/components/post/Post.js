import React from 'react'
import styles from './Post.module.css'
import { Avatar } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { tweetsAtom } from '../../recoil/TweetsRecoil'
import { usersAtom } from '../../recoil/UsersRecoil'
import PostCard from './PostCard'


export default function Post() {

  const tweets = useRecoilValue(tweetsAtom)
  const users = useRecoilValue(usersAtom)

  // const images = new Array(10).fill(0).map((x, index) => {
  //   return `https://picsum.photos/1000/500?q=${index}`;
  // });

  // const avt = new Array(10).fill(0).map((x, index) => {
  //   return <Avatar src="https://picsum.photos/1000/500?q=${index}"/>
  // });


  return (
    <div className={styles.postContainer}>
    <h1>Posts</h1>
    <hr/>
     {tweets.map((tweet)=>(
        <PostCard className={styles.postCards} key={tweet.id} tweet={tweet} />
     ))}
    </div>
  );
  }