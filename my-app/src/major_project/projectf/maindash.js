import React from 'react';
import './maindash.css';
import Cards from '../cards/cards';
import Yash4 from './Table1';
import Desboard from './chartdesbord';
//  here i define landing page of this project using table 1 and dashboard layout 
const Maindash = () => {
  return (
 <>
 <Desboard/>
 <div className='MainDash'>
 <h1 style={{marginLeft:"19%",color:"#8e8b87"}}>Hellow World...</h1>
   <Cards/> 
<Yash4/>
    </div>

</>
  )
}

export default Maindash;
