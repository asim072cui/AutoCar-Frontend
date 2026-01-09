import React from 'react'
import Navbar from '../../componet/navbar/page';
import Homeherosection from './herosection';
import Speaksection from './speaksection';
import Offersection from './offersection';
import Choosesection from './choosesection';
import Clientsection from './clientsection';
import Appointmentsection from './appointmentsection';
import Booksection from './booksection';
import Frenencysection from './frenencysection';
import Newssection from './newletter';
import Subscribe from './subscribe';
import Footersection from '../../componet/footer/page'



const index = () => {
  return (
    <div>
        <Navbar/>
        <Homeherosection/>
        <Speaksection/>
        <Offersection/>
        <Choosesection/>
        <Clientsection/>
        <Appointmentsection/>
        <Booksection/>
        <Frenencysection/>
        <Newssection/>
        <Subscribe/>
        <Footersection/>
        
      
    </div>
  )
}

export default index
