import React from 'react'
import HomeLanding from '../../components/landingPage/HomeLanding'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import Footer from '../../components/footer/Footer'

import { isLogin } from "../Atom"
import { useRecoilValue } from "recoil";
import Post from '../../components/post/Post'

import NotLogin from '../notLoginRight/NotLoginRight'
import NotLoginLeft from '../notLoginLeft/NotLoginLeft'
import { useMediaQuery } from '@mui/material'
import LoginFooter from '../../components/footer/LoginFooter'

function Home() {
  const islogin = useRecoilValue(isLogin);
  const isViewportBelow1200 = useMediaQuery('(max-width:1200px)');
  const isViewportBelow430 = useMediaQuery('(max-width:430px)');

  return (
    <>{
      isViewportBelow1200 ?

                  isViewportBelow430 ?
                          <div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
                                {islogin && <HomeLanding style={{ gridRow: '2 / span 3' }} />}
                            </div>
                             {islogin && <LoginFooter />}
                             </div>
                         :

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                            <div>
                              {islogin && <LeftSideBar style={{ gridRow: '1 / span 2' }} />}
                            </div>
                            <div>
                              {islogin && <HomeLanding style={{ gridRow: '2 / span 3' }} />}
                            </div>
                            
                             
                              
                          </div>

                :

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr" }}>
                <div>
                  {islogin && <LeftSideBar style={{ gridRow: '1 / span 2' }} />}
                </div>
                <div>
                  {islogin && <HomeLanding style={{ gridRow: '2 / span 3' }} />}
                </div>
                  <div>
                    {islogin && <RightSideBar style={{ gridRow: "3 / span 2" }} />}
                  </div>
              </div>
    }
  {
  isViewportBelow1200 ?
    
          isViewportBelow430 ?

                        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
                              
                              <div>
                                {!islogin && <Post style={{ gridRow: '2 / span 3' }} />}
                              </div>
                              {!islogin && <Footer />}
                            </div>
                            :

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                          <div>
                            {!islogin && <NotLoginLeft style={{ gridRow: '1 / span 2' }} />}
                          </div>
                          <div>
                            {!islogin && <Post style={{ gridRow: '2 / span 3' }} />}
                          </div>
                          {!islogin && <Footer />}
                        </div> 

            :
            
            <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.3fr 1fr" }}>
              <div>
                {!islogin && <NotLoginLeft style={{ gridRow: '1 / span 2' }} />}
              </div>
              <div>
                {!islogin && <Post style={{ gridRow: '2 / span 3' }} />}
              </div>
            
              <div>
                {!islogin && <NotLogin style={{ gridRow: "3 / span 3" }} />}
              </div>
              {!islogin && <Footer />}
            </div>
}
    </>
  );
}

export default Home;