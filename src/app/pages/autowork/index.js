import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import Offersection from './offersection';
import Reputationsection from './reputationsection';
import Choosesection from './numberpage';
import Clientsection from './clientsection';
import Activitysection from './activitysection';
import Teamsection from './teamsection';
import Newsection from './newsection';
import Lastsection from './lastsection';
import Footer from '../../componet/footer/page'
import Appointmentsection from '../../componet/appointment';
import Landingpage from '@/app/constant/landingpage.text';

const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Offersection/>
        <Reputationsection/>
        <Choosesection/>
        <Clientsection/>
        <Activitysection/>
        {/* <Appointmentsection data={Landingpage.point}/> */}
        <Teamsection/>
        <Newsection/>
        <Lastsection/>
        <Footer/>
      
    </div>
  )
}

export default index
