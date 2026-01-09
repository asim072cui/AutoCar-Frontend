import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection'; 
import  Landingpage from '../../constant/landingpage.text'
import Appointmentsection from '../../componet/appointment';
import Successsection  from '../../componet/Reuseablecards';
import Storysection from './Storysection';
import Reuseablecards from '../../componet/Reuseablecards';
import ReusevideoSection from '../../componet/videosection';
import Footer from '../../componet/footer/page'

const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Appointmentsection  data={Landingpage.reuse}  withTopSpace={true}
        
        />
        {/* // this is used for sens this.props data of same strture just change content */}
        {/* <Appointmentsection  showSection={false}/> */}
        {/* and this is use for show data of another component but this component   reusevideo   notpick this part  */}
        <Successsection data={Landingpage.reuseCards1}  withTopSpace={false}/> 
        <Storysection/>
        <Reuseablecards data={Landingpage.reuseCards} withTopSpace={true}  />
        <ReusevideoSection data={Landingpage.reusevideo1} withTopSpace={true}  />
        <Footer/>

      </div>
  )
}

export default index
