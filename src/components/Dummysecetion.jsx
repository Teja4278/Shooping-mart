import React from 'react'
import './Style.css'
import { FaCar } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

const Dummysecetion = () => {
  return (
    <div className='container1'>
      <div className="box1">
      <FaCar  className='dummyicon'/>
      <h4>Free Shipping</h4>
      <p>Lorem, ipsum dolor sit amet </p>
      </div>
      <div className="box2" >
      <IoCard className='dummyicon' />
      <h4>Safe Payment</h4>
      <p>Lorem, ipsum dolor sit amet </p>
      </div>
      <div className="box3">
      <FaShieldAlt className='dummyicon' />
      <h4>Secure Payment</h4>
      <p>Lorem, ipsum dolor sit amet </p>
      </div>
      <div className="box4">
      <FaHeadphones className='dummyicon' />
      <h4>Back Guarantee</h4>
      <p>Lorem, ipsum dolor sit amet </p>
      </div>
      
    </div>
  )
}

export default Dummysecetion;
