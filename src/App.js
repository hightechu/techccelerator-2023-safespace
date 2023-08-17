import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is logged in
            navigate("/home");
          }
        });    
  }, [navigate])
 
  // HTML rendered here
  return (
    <div className="container-fluid">
        <h1>Welcome</h1>
        <p>
          Welcome. This is a safe space.
           <a href="/signup" className="buttonSignup">Sign Up</a> 
           <a href="/login" className="buttonLogin">Login</a>
        </p>
    </div>
  );
}
 
export default App;
