import React from 'react'
import styles from './HomeHeader.module.css'


function HomeHeader() {
  return (
  
    <div className={styles.PostTweetHeader}>
        <h1 className={styles.homeHeading}>Home</h1>
        <div className={styles.Headinh}>
        <h2>For you</h2>
        <h2>Follwing</h2>
        </div> 
    </div>  
    
  )
}

export default HomeHeader
