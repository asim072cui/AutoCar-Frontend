import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import Picsection from './picsection';
import Footer from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Picsection/>
         <Footer/>

      </div>
  )
}

export default index
