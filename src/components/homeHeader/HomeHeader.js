import React from 'react'
import styles from './HomeHeader.module.css'


function HomeHeader() {
  return (
  
    <div className={styles.PostTweetHeader}>
        <h1 className={styles.homeHeading}>Home</h1>
        <div className={styles.Headinh}>
        <div><span>For you</span></div>
        <div><span>Follwing</span></div>
        
        </div>
    </div>  
    
  )
}

export default HomeHeader