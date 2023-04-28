import React from 'react'
import styles from './Post.module.css'
import { Avatar } from '@mui/material'

export default function Post({displayName,username,Verified,text,image,avatar}) {



  const images = new Array(10).fill(0).map((x, index) => {
    return `https://picsum.photos/1000/500?q=${index}`;
  });

  const avt = new Array(10).fill(0).map((x, index) => {
    return <Avatar src="https://picsum.photos/1000/500?q=${index}"/>
  });


  return (
    <div className={styles.postContainer}>
    <div className={styles.postContainer}>

    <Avatar src="https://picsum.photos/1000/500?q=${index}"/>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1>
    <h1>dfhdsiuhf</h1> 
    <h1>dfhdsiuhf</h1> 
    <h1>dfhdsiuhf</h1> 
    <h1>dfhdsiuhf</h1>
     <h1>dfhdsiuhf</h1> 
     <h1>dfhdsiuhf</h1> 
     <h1>dfhdsiuhf</h1>
      <h1>dfhdsiuhf</h1> 
      <h1>dfhdsiuhf</h1> 
      <h1>dfhdsiuhf</h1> 
      <h1>dfhdsiuhf</h1>
       <h1>dfhdsiuhf</h1> 
     <h1>dfhdsiuhf</h1> 
     <h1>dfhdsiuhf</h1>
 
    </div>
    
    </div>
  )
}
