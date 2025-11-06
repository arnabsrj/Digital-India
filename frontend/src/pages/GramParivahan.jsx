import React from "react";
import "./SchemeDetail.css";

const GramParivahan = () => {
  return (
    <div className="scheme-detail">
      <header className="scheme-header">
        <h1>Gram Parivahan Yojana (PMGPY)</h1>
      </header>

      <div className="scheme-content">
        <p>
          <strong>Pradhan Mantri Gram Parivahan Yojana (PMGPY)</strong> is a
          new scheme to be launched by the central government. Under this
          program, the government will provide <strong>interest-free loans</strong> 
          to women self-help groups (SHGs) to purchase commercial passenger vehicles.
        </p>

        <p>
          The scheme is being developed on the lines of the existing 
          <strong> Pradhan Mantri Gram Sadak Yojana (PMGSY)</strong>, focusing on 
          enhancing rural connectivity. PMGPY will operate in areas where roads 
          have already been constructed under PMGSY, but where public transport 
          facilities remain limited or unavailable.
        </p>

        <h3>Objective of the Scheme</h3>
        <p>
          The main goal of PMGPY is to <strong>improve rural public transport</strong> 
          and create <strong>employment opportunities</strong> for local communities, 
          especially women. It aims to bridge the gap between villages and cities by 
          providing easy and reliable transport options where infrastructure already exists.
        </p>

        <h3>Implementation Plan</h3>
        <ul>
          <li>Initially, the scheme will cover at least 1,500 commercial vehicles in 250 blocks across India.</li>
          <li>Each vehicle can have a maximum seating capacity of 10 passengers.</li>
          <li>The scheme will later expand to support up to 80,000 vehicles nationwide.</li>
          <li>The maximum loan amount under PMGPY will be ₹6 lakh.</li>
          <li>The loan tenure will be approximately 6 months with no interest.</li>
        </ul>

        <h3>Survey & Feasibility Study</h3>
        <p>
          A pilot survey was conducted in <strong>Bilaspur, Chhattisgarh</strong> to 
          evaluate the scheme’s feasibility. The findings suggested that the best 
          implementation model involves providing subsidized loans for 10–12 seater 
          vehicles to operate on 20–22 km routes connecting 10–14 nearby villages.
        </p>

        <h3>Expected Benefits</h3>
        <ul>
          <li>Boosts rural public transport facilities.</li>
          <li>Generates sustainable employment for rural women.</li>
          <li>Encourages local entrepreneurship through SHGs.</li>
          <li>Improves accessibility between rural and urban regions.</li>
        </ul>
      </div>
    </div>
  );
};

export default GramParivahan;
