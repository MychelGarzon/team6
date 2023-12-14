import React, { useState, useEffect } from 'react';
import { updateProfile, getAuth, updateEmail, updatePassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase'; // Adjust the import path

const UserProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth.currentUser;
      
      
      if (user) {
        const userRef = doc(firestore, 'users', user.uid);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setDisplayName(userData.displayName || '');
          setEmail(userData.email || '');
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const user = auth.currentUser;
    

    try {
      // Update the user's display name
      await updateProfile(user, { displayName });

      // Update the user's email (if changed)
      if (email !== user.email) {
        //await updateEmail(user, email);
        updateEmail(user, email).then(() => {
          // Email updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }

      // Update the user's password (if changed)
      if (password) {
        await updatePassword(user, password);
      }

      // Update the user's profile data in Firestore
      const userRef = doc(firestore, 'users', user.uid);
      await setDoc(userRef, { displayName, email }, { merge: true });

      /* console.log('User profile updated successfully!'); */
    } catch (error) {
      /* console.error('Error updating user profile:', error.message); */
    }
  };

  return (
    <div>
      <h4>Your Details</h4>
      <form>
        <label>
          Display Name:
          <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;