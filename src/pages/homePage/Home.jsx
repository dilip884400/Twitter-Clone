import React from 'react'
import HomeLanding from '../../components/landingPage/HomeLanding'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import Footer from '../../components/footer/Footer'

import { isLogin } from "../Atom"
import { useRecoilValue } from "recoil";
import Post from '../../components/post/Post'
import CreateAccount from '../createAccount/CreateAccount'
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
              <div > 
                {islogin && <HomeLanding  style={{ gridRow: '2 / span 3' }}/>}
              </div>
            
              <div> 
                   {islogin && <RightSideBar  style={{ gridRow: "3 / span 2" }}/>}
             
              </div>
         </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }} >
                <div >
                   {!islogin && <LeftSideBar style={{ gridRow: '1 / span 2' }}/>}
                </div> 
                 <div>
                      {!islogin && <Post style={{ gridRow: '2 / span 3' }} /> }
                  </div>
                  <div>
                      {!islogin && < CreateAccount style={{ gridRow: "3 / span 3" }}/>}
                   </div>
                 {!islogin && <Footer />}
            </div>
    </>
  );
}

export default Home;