import React from "react";
import "./JoinNetwork.css";

const JoinNetwork = () => {
  return (
    <div className="join-network-container">
      {/* Green Header Section */}
      <div className="join-green-banner">
        <h1>Join Our Network</h1>
      </div>

      {/* Main Content Section */}
      <div className="join-sections">
        {/* Retail Partner */}
        <div className="join-card">
          <h2>Become A Retail Partner</h2>
          <p>
            Become a part of India’s fast-growing business & get recognized in
            your area. Provide essential services to your customers through our
            platform and earn commission on all transactions! Your customers will
            be able to pay bills, buy recharges, make travel bookings, and avail
            banking and financial services from your shop!
          </p>
          <ul>
            <li>Wide array of services</li>
            <li>Upfront commission on transactions</li>
            <li>0% downtime</li>
            <li>Real-time transactions</li>
            <li>Branding & marketing support</li>
            <li>Increased customer loyalty & footfall</li>
            <li>Great offers, deals and margins</li>
            <li>Instant query resolutions</li>
          </ul>
          <p className="join-note">
            You are only a few steps away from starting your new business. All you
            need is a retail shop, PC, Internet & the enthusiasm to make money!
          </p>
          <p className="join-contact">
            Interested? Please fill in your contact details and we’ll get in touch
            with you at the earliest.
          </p>
        </div>

        {/* Channel Partner */}
        <div className="join-card">
          <h2>Become A Channel Partner</h2>
          <p>
            Become a part of India’s fastest-growing business. Get recognized in
            your area by providing essential services through your retail network.
            Earn commission on new retailer sign-ups + earn margin on all
            transactions that your retailers make!
          </p>
          <ul>
            <li>Great bulk deals & smart money maker products</li>
            <li>Revenue maximization with area-specific services</li>
            <li>Branding & marketing support</li>
            <li>Regular training & orientation programs</li>
            <li>Full support to achieve ROI</li>
            <li>Dedicated service desks</li>
          </ul>
          <p className="join-contact">
            Fill in your contact details and we’ll reach out to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinNetwork;
