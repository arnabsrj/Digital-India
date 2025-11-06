import React from "react";
import "./Financial.css";

const CSP = () => {
  return (
    <div className="financial-page">
      <h1>Jan Dhan Accounts CSP</h1>
      <p>
        Jan Dhan Accounts were launched on 15 August 2014 under the Pradhan
        Mantri Jan-Dhan Yojana to ensure access to banking services for all.
        It’s a flagship program for financial inclusion, providing savings,
        remittance, insurance, and pension access to the unbanked.
      </p>
      <h2>Key Benefits</h2>
      <ul>
        <li>Overdraft facility up to ₹5,000 after 6 months</li>
        <li>Accidental insurance cover of ₹1 lakh</li>
        <li>Life cover of ₹30,000</li>
        <li>Direct Benefit Transfer of government subsidies</li>
        <li>Zero balance account</li>
      </ul>
      <p>
        So far, over 27 crore accounts have been opened under Jan Dhan Yojana.
      </p>
    </div>
  );
};

export default CSP;
