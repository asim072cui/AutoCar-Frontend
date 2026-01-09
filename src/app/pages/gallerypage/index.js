import React from 'react'
import Navbar from '../../componet/navbar/page';
import Herosection from './herosection';
import GallerySection from './gallerysection';
import Footer from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <GallerySection/>
       
         <Footer/>

      </div>
  )
}

export default index
