import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://lsqhlbmfktqmuewkbejb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcWhsYm1ma3RxbXVld2tiZWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMDU3NjUsImV4cCI6MjAwNjc4MTc2NX0.etHXHi4eYg_WlZscLM4kquTBQkMSbEtyf16xOrKFb-I");

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) {
        console.error('Sign in error:', error);
      } else {
        console.log('Signed in user:', user);
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div className="center-container">
     <div className="App">
      <h1>BEACH-CRL</h1>
      <h3> CSULB Collaborative Robotics Lab</h3>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      </div> 
    </div>
  );
}

export default App;
