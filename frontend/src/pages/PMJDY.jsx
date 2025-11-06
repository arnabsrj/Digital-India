import React from "react";
import "./PMJDY.css";

const PMJDY = () => {
  return (
    <div className="scheme-detail">
      <header className="scheme-header">
        <h1 >Pradhan Mantri Jan-Dhan Yojana (PMJDY)</h1>
      </header>

      <div className="scheme-content">
        <p>
          <strong>Pradhan Mantri Jan-Dhan Yojana (PMJDY)</strong> is a National
          Mission for Financial Inclusion to ensure access to financial
          services, namely, Banking/Savings & Deposit Accounts, Remittance,
          Credit, Insurance, and Pension in an affordable manner.
        </p>

        <p>
          Account can be opened in any bank branch or Business Correspondent
          (Bank Mitr) outlet. Accounts opened under PMJDY are being opened with
          Zero balance. However, if the account-holder wishes to get cheque
          book, he/she will have to fulfill minimum balance criteria.
        </p>

        <h3>Documents required to open an account under PMJDY:</h3>
        <ul>
          <li>Passport</li>
          <li>Driving Licence</li>
          <li>PAN Card</li>
          <li>Voter ID</li>
          <li>NREGA Job Card</li>
          <li>Aadhaar Letter</li>
          <li>Any other officially valid document</li>
        </ul>

        <h3>Special Benefits under PMJDY:</h3>
        <ul>
          <li>Interest on deposit</li>
          <li>Accidental insurance cover of ₹1 lakh</li>
          <li>No minimum balance required</li>
          <li>Life cover of ₹30,000</li>
          <li>Direct Benefit Transfer for government schemes</li>
          <li>Overdraft facility after 6 months</li>
          <li>Access to pension and insurance products</li>
        </ul>
      </div>
    </div>
  );
};

export default PMJDY;
