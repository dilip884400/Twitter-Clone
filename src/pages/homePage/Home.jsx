import React from 'react'
import HomeLanding from '../../components/landingPage/HomeLanding'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import Footer from '../../components/footer/Footer'
import PostTweet from '../../components/postTweet/PostTweet'
import { isLogin } from "../Atom"
import { useRecoilValue } from "recoil";
// export default function Home() {
//   return (
//     <div>
//     {/* <div  style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
//   <LeftSideBar style={{ gridRow: '1 / span 2' }} />
   
// </div> */}
// <div > <PostTweet /></div>
// </div>
//   )
// }
function Home() {

  const islogin = useRecoilValue(isLogin);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }} >
          <div >
            {islogin && <LeftSideBar style={{ gridRow: '1 / span 2' }}/>}
          </div> 
          
              {!islogin && <h1>Welcome to home page</h1>}
              <div > 
              {islogin && <HomeLanding  style={{ gridRow: '2 / span 3' }}/>}
              </div>
              <div > 
              {islogin && <RightSideBar  style={{ gridRow: "3 / span 2" }}/>}
              </div>
         {!islogin && <Footer />}
      </div>
    </>
  );
}

export default Home;