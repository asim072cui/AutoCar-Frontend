import React from 'react'
import Navbar from '../../componet/navbar/page'
import Footer from '../../componet/footer/page'
import Herosection from './herosection'
import  ApplicationStatus  from './applicationStatus'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Footer/>
    </div>
  )
}

export default index
