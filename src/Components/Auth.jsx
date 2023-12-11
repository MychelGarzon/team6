import React, { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Auth = () => {

  useEffect(() => {
       
    document.title = `Login/Register | JUDOMYKA`;

  }, []);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Fetch the user's display name from Firestore
        const userDocument = await createUserProfileDocument(user);
        if (userDocument) {
          /* setDisplayName(userDocument.data().displayName); */
          setDisplayName(userDocument.data().displayName);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName });

        // Create or update the user profile in Firestore
        await createUserProfileDocument(userCredential.user, { displayName, email });

        console.log('User signed up:', userCredential.user);
        navigate('/dashboard');

      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);

        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div id='authPage'>
        <div id='authForm'>
          <h2>{isSignUp ? 'Register' : 'Sign In'}</h2>
          <form onSubmit={handleSubmit}>
          {isSignUp && (
              <>
                <label>Display Name:
                  <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
                </label>
                
              </>
            )}
            <>
            <label>Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            </>
            <>
            <label>Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            </>
            <br />
            <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </form>
          <p id='authP' onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
          </p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Auth;