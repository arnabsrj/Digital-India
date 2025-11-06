import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const schemes = [
    { name: "Pradhan Mantri Jan-Dhan Yojana (PMJDY)", path: "/scheme/pmjdy" },
    { name: "Pradhan Mantri Kaushal Vikas Yojana", path: "/scheme/pmkvy" },
    { name: "Pradhan Mantri Bima Yojana", path: "/scheme/pmbjy" },
    { name: "GST Yojana", path: "/scheme/gst" },
    { name: "Gram Parivahan Yojana", path: "/scheme/gpy" },
    { name: "Easy Loan Scheme", path: "/scheme/loan" },
    { name: "Jan Dhan Yojana & Accounts", path: "/scheme/jdya" },
  ];

  const financialServices = [
    { name: "Digital India MicroATM", path: "/financial/microatm" },
    { name: "Jan Dhan Accounts CSP", path: "/financial/csp" },
    { name: "Distribution", path: "/financial/distribution" },
  ];

  return (
    <div className="services-page">
      {/* Schemes Section */}
      <section className="service-section">
        <h2 className="section-title">Schemes</h2>
        <div className="card-grid large">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="info-card"
              onClick={() => navigate(scheme.path)}
            >
              <h3>{scheme.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="service-section">
        <h2 className="section-title">Financial Services</h2>
        <div className="card-grid large">
          {financialServices.map((service, index) => (
            <div
              key={index}
              className="info-card"
              onClick={() => navigate(service.path)}
            >
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
