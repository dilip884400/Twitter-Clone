import React from "react";
import styles from "./HomeLanding.module.css";
import HomeHeader from "../homeHeader/HomeHeader";
import PostTweet from "../postTweet/PostTweet";
import Post from '../post/Post'
import { tweetsAtom } from "../../recoil/TweetsRecoil";
import { usersAtom } from "../../recoil/UsersRecoil";
import { useRecoilValue } from "recoil";

export default function HomeLanding() {
  const tweets = useRecoilValue(tweetsAtom)
  const users = useRecoilValue(usersAtom)
  console.log(users)
  return (
    <div className={styles.MainHome}>
      <HomeHeader />
      <PostTweet/>
      {/* <Post/> */}
      {tweets.length}
      {users.length}
      </div>
  );
}
