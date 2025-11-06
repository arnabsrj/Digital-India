import React from "react";
import "./Financial.css";

const MicroATM = () => {
  return (
    <div className="financial-page">
      <h1>Digital India MicroATM – Super Service Agent</h1>
      <p>
        Digital India has taken a step forward in Financial Inclusion by
        partnering with RBL Bank and introducing the new Digital India MicroATM –
        Super Service Agent. This service provides additional Financial
        Inclusion features such as Cash Withdrawal & Deposit besides Debit/Credit
        Card transactions.
      </p>
      <h2>What Services Will It Provide?</h2>
      <ul>
        <li>eKYC for Digital India Wallet</li>
        <li>Cash Withdrawals using Rupay Cards</li>
        <li>AEPS-based Cash Withdrawals</li>
        <li>Money Transfer & Wallet Loading</li>
        <li>Acceptance of Debit/Credit Card Payments</li>
      </ul>

      <h2>Documents Required</h2>
      <ul>
        <li>Aadhaar Card</li>
        <li>Address Proof</li>
        <li>Photo ID Proof</li>
        <li>PAN Card</li>
      </ul>

      <h2>Benefits for Retailers</h2>
      <ul>
        <li>Additional Revenue Stream</li>
        <li>Banking Services for All Banks</li>
        <li>Low Investment, High Returns</li>
        <li>Increased Footfall with Signage</li>
      </ul>
    </div>
  );
};

export default MicroATM;
