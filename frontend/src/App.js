import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";

// --- Public Layout ---
import Header from "./components/Header";
import Footer from "./components/Footer";

// --- Public Pages ---
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import JoinNetwork from "./pages/JoinNetwork";
import Offerings from "./pages/Offerings";
import VacantPlace from "./pages/VacantPlace";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import GST from "./pages/GST";
import GramParivahan from "./pages/GramParivahan"
import EasyLoan from "./pages/EasyLoan";
import JanDhanAccounts from "./pages/JanDhanAccounts";



import MicroATM from "./pages/MicroATM";
import CSP from "./pages/CSP";
import Distribution from "./pages/Distribution";


// --- Admin Components ---
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute"; // For security
import AdminLayout from "./components/AdminLayout"; // Admin sidebar/header

// --- Admin Pages (to nest inside AdminLayout) ---
import Dashboard from "./pages/admin/Dashboard";
import ManageApplications from "./pages/admin/ManageApplications";
import ManageBlog from "./pages/admin/ManageBlog";
import ManageVacancies from "./pages/admin/ManageVacancies";
import PMJDY from "./pages/PMJDY";
import PMKVY from "./pages/PMKVY";
import PMBimaYojana from "./pages/PMBimaYojana";
import ManageContacts from "./pages/admin/ManageContacts";
/**
 * This component wraps all public pages (Home, About, etc.)
 * with the main Header and Footer.
 */
const PublicLayout = () => (
  <div className="font-sans">
    <Header />
    <main>
      {/* Outlet renders the matched child route (e.g., Home) */}
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Public Routes (Wrapped with Header/Footer) */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="/scheme/pmjdy" element={<PMJDY />} />
           <Route path="/scheme/pmkvy" element={<PMKVY />} />
            <Route path="/scheme/pmbjy" element={<PMBimaYojana />} />
            <Route path="/scheme/gpy" element={<GramParivahan />} />
            <Route path="/scheme/gst" element={<GST />} />
            <Route path="/scheme/loan" element={<EasyLoan />} />
        <Route path="/scheme/jdya" element={<JanDhanAccounts />} />
<Route path="/financial/microatm" element={<MicroATM />} />
        <Route path="/financial/csp" element={<CSP />} />
        <Route path="/financial/distribution" element={<Distribution />} />


          <Route path="join-network" element={<JoinNetwork />} />
          <Route path="offerings" element={<Offerings />} />
          <Route path="vacant-place" element={<VacantPlace />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* 2. Admin Login Route (Has NO Header/Footer) */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 3. Protected Admin Routes (Wrapped in AdminLayout) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* These routes render inside the AdminLayout's <Outlet> */}
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<ManageApplications />} />
          <Route path="blog" element={<ManageBlog />} />
          <Route path="vacancies" element={<ManageVacancies />} />
          <Route path="contacts" element={<ManageContacts />} />
        </Route>

        {/* 4. Optional: A 404 Not Found page */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
