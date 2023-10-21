import React from 'react'
import Layout from './../components/Layout/Layout'
import {BiMailSend ,BiPhoneCall,BiSupport} from 'react-icons/bi'
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
   <div className="row-contactUs">
    <div className="col-md-6">
      <img src="/Images/contactus.jpeg" alt="contactus" style={{width:"100%"}}/>
    </div>
    <div className="col-md-4">
      <h1 className="bg-dark text-white text-center">CONTACT US</h1>
      <p className="mt-3">
        For any query and info about product feel free to call anytime we are 24X7 available.
      </p>
    <p className="mt-3">
    <BiMailSend /> : www.help@ecommerceapp.com
    </p>
    <p className="mt-3">
     <BiPhoneCall /> : 012-234567
    </p>
    <p className="mt-3">
      <BiSupport/> : 1800-0000-2002 (toll free)
    </p>
    </div>
   </div>
    </Layout>
  )
}

export default Contact
