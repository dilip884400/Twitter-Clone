import React from "react";
import styles from "./HomeLanding.module.css";
import HomeHeader from "../homeHeader/HomeHeader";
import PostTweet from "../postTweet/PostTweet";
import Post from '../post/Post'

export default function HomeLanding() {
  return (
    <div className={styles.MainHome}>
      <HomeHeader />
      <PostTweet/>
      <Post/>
      </div>
  );
}
