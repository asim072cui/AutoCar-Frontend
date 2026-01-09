import React from 'react'
import Navbar from '../../componet/navbar/page';
import Carinfo from './herosection';
import  Footersection  from  '../../componet/footer/page';

const index = () => {
  return (
    <div>
        <Navbar/>
        <Carinfo/>
        <Footersection/>
    </div>
  )
}

export default index