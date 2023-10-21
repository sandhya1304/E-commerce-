import React from "react";
import Layout from "./../components/Layout/Layout";
import '../styles/Policy.css';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row policy ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Welcome to Shopify! 
            We value your trust and are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
            By using our services, you agree to the practices described in this policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;