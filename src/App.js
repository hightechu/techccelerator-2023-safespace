import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from "SS.logo.png";

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
        <img src={logo} class="center"></img>
        <h1>Safe Space</h1>
        <p>
          Welcome to Safe Space, if you are new to this website, sign up. If you are a returning user please login to access the site and its features.
           <div className="container"> 
           <a href="/signup" className="buttonSignup">Sign Up</a> 
           <a href="/login" className="buttonLogin">Login</a>
           </div>
        </p>
    </div>
  );
}
 
export default App;
