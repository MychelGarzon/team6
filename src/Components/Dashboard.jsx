import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import UserProfile from './UserProfile';
import {onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Auth from './Auth';





const Dashboard = () => {
  useEffect(() => {
       
    document.title = `Dashboard | JUDOMYKA`;

  }, []);


  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  //Sign out function is called with onClick={handleLogout}
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      /* console.log('User logged out'); */
      navigate('/'); // Log this line to check if it's executed
    } catch (error) {
      /* console.error('Logout error:', error.message); */
    }
  };

  useEffect(() => {
    // Check for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  // If the user is not signed in, you can render alternative content or redirect
  if (!user) {
    /* return <p id='plsSignIn'>Please  <Link to={'/'}>&nbsp; sign in &#160;</Link> to view this content.</p>; */
    return <Auth/>
  }
  

  return (
    <>
      <div id="dashPage">
      <div id='dash'>
        
        <h2>Dashboard</h2>
        <h3>Hello {user?.displayName || 'there'}!</h3>
        {/* <p>Other user details will go here</p> */}
        

        <UserProfile/>

      </div>
      </div>
    </>
  );

};

export default Dashboard;