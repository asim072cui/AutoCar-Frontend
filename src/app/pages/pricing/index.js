import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import Pricecards from './pricecards';
import ScheduleSection from './schedulesection';
import Footer from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Pricecards/>
        <ScheduleSection/>
       
         <Footer/>

      </div>
  )
}

export default index
