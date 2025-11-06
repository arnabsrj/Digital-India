import React from "react";
import "./SchemeDetail.css";

const JanDhanAccounts = () => {
  return (
    <div className="scheme-detail">
      <header className="scheme-header">
        <h1>Jan Dhan Yojana & Accounts</h1>
      </header>

      <div className="scheme-content">
        <p>
          <strong>Pradhan Mantri Jan-Dhan Yojana (PMJDY)</strong> is a National Mission 
          for Financial Inclusion to ensure access to financial services like Banking, 
          Savings & Deposit Accounts, Remittance, Credit, Insurance, and Pension in an affordable manner.
        </p>

        <p>
          Accounts can be opened at any bank branch or through Business Correspondents (Bank Mitr) 
          with zero balance. However, if the account holder wants a cheque book, they must maintain 
          a minimum balance.
        </p>

        <h3>Documents Required to Open an Account:</h3>
        <ul>
          <li>Passport</li>
          <li>Driving Licence</li>
          <li>PAN Card</li>
          <li>Voter’s ID</li>
          <li>NREGA Job Card signed by a state government officer</li>
          <li>Aadhaar letter issued by UIDAI</li>
          <li>Any other valid government-issued ID</li>
        </ul>

        <p>
          The Reserve Bank of India clarified that people without these documents 
          can open “Small Accounts” with self-attested photos and signatures 
          in the presence of bank officials. These accounts have limits:
        </p>
        <ul>
          <li>Credits ≤ ₹1,00,000 per year</li>
          <li>Withdrawals ≤ ₹10,000 per month</li>
          <li>Balance ≤ ₹50,000 at any time</li>
        </ul>

        <h3>Special Benefits under PMJDY:</h3>
        <ul>
          <li>Interest on deposits</li>
          <li>Accidental insurance cover of ₹1 lakh</li>
          <li>No minimum balance required</li>
          <li>Life cover of ₹30,000</li>
          <li>Direct Benefit Transfer for government schemes</li>
          <li>Overdraft facility after 6 months</li>
          <li>Access to pension and insurance products</li>
        </ul>

        <h3>About Jan Dhan Accounts:</h3>
        <p>
          Launched on 15 August 2014 by Prime Minister Narendra Modi, the Jan Dhan Yojana aimed 
          to provide banking access to over 15% of India’s unbanked population.
          The scheme allowed overdraft up to ₹5,000 after six months of account activity, 
          accidental insurance cover of ₹1 lakh, and a life cover of ₹30,000. 
          To date, over 27.8 crore accounts have been opened under this scheme.
        </p>
      </div>
    </div>
  );
};

export default JanDhanAccounts;
