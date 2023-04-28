import * as React from 'react';
// import Box from '@mui/material/Box';
import styles from './WhatsHappening.module.css'
// import SearchIcon from '@mui/icons-material'
import { IconButton } from '@mui/material';
export default function WhatsHappening() {
  const[value,setValue]=React.useState()
  return (
    <div className={styles.widgets}>
         <div className={styles.search_area}>
          <IconButton>
            {/* <SearchIcon/> */}
          </IconButton>
          <input className={styles.SearchInput} value={value} onChange={(e)=>(setValue(e.target.value))} />
         </div>
         <div className={styles.trending_area}>
            <h2>Your trendings</h2>
         </div>
    </div>
  );
}





















 {/* <Box>
      <div className={styles.heading}><h3 >WhatsHappening</h3></div>
      <img className={styles.img} src='logo.jpg' />
        <div><h3></h3></div>
        
    </Box> */}