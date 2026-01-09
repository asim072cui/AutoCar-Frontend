import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import Reusecardssection from '../../componet/Reuseablecards'; 
import  Landingpage from '../../constant/landingpage.text';
import BannerImageSection from '../../componet/bannerimage';
import Moderncards from './moderncards';
import Footer from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        {/* <Reusecardssection   data={Landingpage.reuseCards} withTopSpace={true}/> */}
        <Moderncards/>
        <BannerImageSection/>
         <Footer/>

      </div>
  )
}

export default index
