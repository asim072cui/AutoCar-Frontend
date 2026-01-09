import React from 'react'
import Herosection from './herosection';
import Navbar from '../../componet/navbar/page';
import Brandicon from './brandicon';
import Carbrand from './carbrand';
import Piccar from './piccar';
import  Footersection  from  '../../componet/footer/page';



const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Brandicon/>
        <Carbrand/>
        <Piccar/>
        <Footersection/>
    </div>
  )
}

export default index
