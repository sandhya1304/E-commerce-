import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/About.css";

const About = () => {
  return (
    <Layout title={"About us - Shopify"}>
      <div className="row aboutus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
           <h1> Welcome to Shopify </h1> 
            Your One-Stop Destination for All Your Shopping Needs!
            At Shopify, we believe that shopping should be a seamless, enjoyable, and rewarding experience.
            Our journey began with a simple idea: to create an online marketplace that offers the widest selection of products, 
            the best prices, and the most convenient shopping process for our customers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;