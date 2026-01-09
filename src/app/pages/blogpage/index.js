import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import BlogSection from './blogsection';
import ScheduleSection from '../pricing/ScheduleSection';
import Footer from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <BlogSection/>
        <ScheduleSection/>
       
         <Footer/>

      </div>
  )
}

export default index
