import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
 
const UserHome = () => {

    // Use this code (lines 9-18) on other pages that you only want authenticated users to see
    const currentUser = auth.currentUser;
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              // No user is logged in. Navigate them to the login page
              navigate("/login");
            }
          });    
    }, [navigate])

    const handleLogout = () => {               
        signOut(auth).then(() => {
            // Sign-out successful. Redirect to landing page
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
 
    return (
        <div className="container-fluid">        
            <h1> Who are we?</h1>
            <p>
                We are Safe Space, a web app designed by teens, for teens. We believe that there is far too much stigma surrounding men's mental health, especially in adolescence. Everyone deserves to feel safe asking for help, and to receive the support they need. Our mission here at Safe Space is to eliminate the stigma and help young men open up about their struggles and see that they are not alone. We provide peer support, mental health resources, crisis lines and in-person booking aids all in one place. 
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
 
export default UserHome