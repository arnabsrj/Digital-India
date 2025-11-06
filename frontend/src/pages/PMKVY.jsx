import React from "react";
import "./PMKVY.css";

const PMKVY = () => {
  return (
    <div className="scheme-detail">
      <header className="scheme-header">
        <h1>Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</h1>
      </header>

      <div className="scheme-content">
        <p>
          <strong>Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</strong> is a
          skill training scheme launched by the Government of India to empower
          the country’s youth by providing them with employable and
          industry-relevant skills. The word “Kaushal” means “Skill,” and the
          main goal of this initiative is to make India’s young population more
          capable, confident, and financially strong through skill-based
          learning.
        </p>

        <p>
          Under this scheme, beneficiaries who are successfully trained,
          assessed, and certified receive monetary rewards from the government.
          Multiple skill courses are conducted by affiliated training providers
          under the Kaushal Vikas Yojana.
        </p>

        <p>
          PMKVY is operated by the <strong>Ministry of Skill Development and
          Entrepreneurship (MSDE)</strong> and implemented by the{" "}
          <strong>National Skill Development Corporation (NSDC)</strong>. The
          scheme aims to scale up skill training activities across India while
          maintaining high-quality standards.
        </p>

        <h3>Objectives of Pradhan Mantri Kaushal Vikas Yojana:</h3>
        <ul>
          <li>Provide skill-based training to make youth employable.</li>
          <li>
            Enhance productivity of the existing workforce and align training
            with industry needs.
          </li>
          <li>
            Offer monetary rewards for skill certification to improve
            employability and productivity.
          </li>
          <li>
            Provide an average financial incentive of ₹8,000 per candidate
            completing skill training.
          </li>
        </ul>

        <h3>Main Features of PMKVY:</h3>
        <ul>
          <li>
            Training is provided based on{" "}
            <strong>
              National Occupational Standards (NOS) and Qualification Packs
              (QPs)
            </strong>{" "}
            defined by Sector Skill Councils (SSCs).
          </li>
          <li>
            Skill training focuses on areas identified through Skill Gap
            Studies.
          </li>
          <li>
            Programs are aligned with national initiatives like{" "}
            <em>Swachh Bharat, Digital India, Make in India,</em> and{" "}
            <em>National Solar Mission.</em>
          </li>
          <li>
            Training providers must undergo due diligence as per NSDC guidelines
            before registration.
          </li>
          <li>
            Curriculum includes soft skills, personal grooming, and workplace
            ethics.
          </li>
          <li>
            Candidates with prior experience can undergo skill assessment and
            earn monetary rewards.
          </li>
          <li>
            Higher incentives are offered for manufacturing, construction, and
            plumbing sectors.
          </li>
          <li>
            Monetary rewards are directly transferred to beneficiaries’
            bank accounts using Aadhaar-based identification.
          </li>
          <li>
            Government provides mentoring and placement support post-training.
          </li>
        </ul>

        <h3>PMKVY Target and Scheme Outlay:</h3>
        <p>
          The Pradhan Mantri Kaushal Vikas Yojana aims to train approximately{" "}
          <strong>24 lakh youth in one year</strong> at a total cost of{" "}
          <strong>₹1,500 crore.</strong>
        </p>

        <table className="data-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Average Reward (₹)</th>
              <th>Physical Target (in lakh trainees)</th>
              <th>Financial Target (₹ in crore)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fresh Trainings</td>
              <td>8,000</td>
              <td>14</td>
              <td>1,120</td>
            </tr>
            <tr>
              <td>Recognition of Prior Learning (RPL)</td>
              <td>2,200</td>
              <td>10</td>
              <td>220</td>
            </tr>
            <tr>
              <td colSpan="3">Sub Total</td>
              <td>1,340</td>
            </tr>
            <tr>
              <td colSpan="3">Awareness & Mobilization (5%)</td>
              <td>67</td>
            </tr>
            <tr>
              <td colSpan="3">
                Incentives for Mentorship & Placement (5%)
              </td>
              <td>67</td>
            </tr>
            <tr>
              <td colSpan="3">Administrative Expenses (2%)</td>
              <td>26</td>
            </tr>
            <tr>
              <td colSpan="3">
                <strong>Total</strong>
              </td>
              <td>
                <strong>₹1,500 crore</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PMKVY;
