import React from 'react'
import Trends from './whatsHappeningBar/TrendingBar'
import Righthomebox2 from './whoToFollowBar/WhoToFollow'
import styles from "./RightSideBar.module.css"
import SearchBar1 from './searchBar/SearchBar1'
const RightSideBar = () => {
  return (
    <div className={styles.RightSideBar}>
        <SearchBar1 />     
        <Trends/> 
        <Righthomebox2 />
    </div>
  )
}

export default RightSideBar
