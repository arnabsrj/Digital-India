import React from "react";
import "./SchemeDetail.css";

const GST = () => {
  return (
    <div className="scheme-detail">
      <header className="scheme-header">
        <h1>Goods and Services Tax (GST)</h1>
      </header>

      <div className="scheme-content">
        <p>
          <strong>Goods and Services Tax (GST)</strong> is the biggest tax reform
          undertaken in India since Independence. Implemented from July 1, GST
          aims to subsume all indirect taxes into one unified structure,
          creating a single national market.
        </p>

        <p>
          Once in force, GST replaces at least 17 state and federal taxes,
          bringing them under one comprehensive tax system. It is applied on the
          manufacture, sale, and consumption of goods and services throughout
          India, ensuring transparency and efficiency in taxation.
        </p>

        <p>
          The introduction of GST is expected to bring a qualitative change in
          the Indian taxation system by redistributing the burden of taxation
          more equitably between manufacturing and services sectors.
        </p>

        <h3>Global Recognition:</h3>
        <p>
          Even before its implementation, the <strong>International Monetary Fund (IMF)</strong> 
          appreciated India’s bold step towards taxation reform. IMF Deputy
          Managing Director <strong>Tao Zhang</strong> acknowledged the progress, saying:
          “The government has made significant progress on important economic
          reforms that will support strong and sustainable growth going
          forward.”
        </p>

        <h3>Demonetisation & Formalisation:</h3>
        <p>
          On November 8, 2016, the government also took another landmark step by
          demonetising ₹500 and ₹1,000 notes. The move aimed to eliminate black
          money and fake currency from the system. Although it didn’t completely
          eliminate corruption, it successfully brought unaccounted money into
          the banking system and improved financial transparency.
        </p>

        <p>
          Reports indicated that only <strong>1.5% of India’s taxpayers</strong> contributed
          around 57% of total tax revenue. The government’s goal was to address
          this imbalance by expanding the tax base and encouraging digital
          financial transactions.
        </p>

        <h3>Expert Opinions:</h3>
        <p>
          While economists had mixed reactions to demonetisation and GST,
          <strong> Nandan Nilekani</strong>, former UIDAI Chairman, supported the move.
          He predicted that India’s shift toward a digital and formal economy
          would reduce black money and enhance accountability.
        </p>

        <p>
          “The more important thing is when the economy becomes formal, when
          everybody’s financial transactions are digitised … India is going to
          go from data poor to data rich and that will make it more and more
          difficult for people to do dishonest things or to be outside the
          system,” Nilekani said.
        </p>
      </div>
    </div>
  );
};

export default GST;
