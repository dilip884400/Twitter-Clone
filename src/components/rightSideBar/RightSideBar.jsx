import React from 'react'
import Search from './searchBar/SearchBar'
import TrendingBar from './whatsHappeningBar/TrendingBar'
import Righthomebox2 from './whoToFollowBar/WhoToFollow'
import styles from "./RightSideBar.module.css"
const RightSideBar = () => {
  return (
    <div className={styles.RightSideBar}>
        <Search />     
        <TrendingBar/> 
        <Righthomebox2 />
    </div>
  )
}

export default RightSideBar
