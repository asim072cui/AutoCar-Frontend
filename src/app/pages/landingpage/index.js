import React from 'react'
import Herosection from './herosection';
import Navbar from '../../componet/navbar/page';
import Servicesection from './servicesection';
import Choosesection from './choosesection';
import Customersection from './customersection';
import Videosection from '../../componet/videosection';
import Speaksection from './Bussinessection';
import Contactform  from './contactform';
import Blogsection from './blogsection';
import Newblogsection from './newblogsection';
import Faqsection from './faqsection';
import  Footersection  from  './footersection';
import Appointmentsection from '../../componet/appointment';
import Landingpage from '../../constant/landingpage.text'


const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Servicesection/>
        <Choosesection/>
        <Customersection/>
        <Appointmentsection data={Landingpage.point}/>
        <Videosection    data={Landingpage.reusevideo} withTopSpace={false}  />
        <Speaksection/>
        <Contactform/>
        <Blogsection/>
        <Newblogsection/>
        <Faqsection/>
        <Footersection/>
    </div>
  )
}

export default index
