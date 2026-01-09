import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import Mapsection from './mapsection';
import Footer from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Mapsection/>    
         <Footer/>

      </div>
  )
}

export default index
