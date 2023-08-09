import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://lsqhlbmfktqmuewkbejb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcWhsYm1ma3RxbXVld2tiZWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMDU3NjUsImV4cCI6MjAwNjc4MTc2NX0.etHXHi4eYg_WlZscLM4kquTBQkMSbEtyf16xOrKFb-I");
import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import './App.css'; // Import your CSS file (if you have one)


function App() {
    return (
      <BrowserRouter>
        <div className="button-container">
          <Link to="/Login" className="button">
            Sign In
          </Link>
          <Link to="/CreateAccount" className="button">
            Create Account
          </Link>
        </div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    );
  }
  

export default App;
