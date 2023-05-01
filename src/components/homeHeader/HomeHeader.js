import React from 'react'
import styles from './HomeHeader.module.css'


function HomeHeader() {
  return (
  
    <div className={styles.PostTweetHeader}>
        <h1 className={styles.homeHeading}>Home</h1>
        <div className={styles.Headinh}>
       <div className={styles.headingDiv}><span className={styles.headingSpan}>For you</span></div>
        <div className={styles.headingDiv}><span className={styles.headingSpan}>Follwing</span></div>
        </div> 
    </div>  
    
  )
}

export default HomeHeader