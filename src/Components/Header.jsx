import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { firestore, auth } from '../firebase';
import {onAuthStateChanged} from 'firebase/auth'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    // User authentication
    const [user, setUser] = useState(null);
    /* console.log('User:', user); */
    const [displayName, setDisplayName] = useState(null);

        //Sign-out function is called with onClick={handleLogout} inside a HTML element
        const navigate = useNavigate();
        const handleLogout = async () => {
          try {
            await auth.signOut();
            //console.log('User logged out');
            navigate('/dashboard');
          } catch (error) {
            console.error('Logout error:', error.message);
          }
        };
    
        // 
        useEffect(() => {
            // Listen for changes in the user's authentication state
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              setUser(user);
            });
        
            // Cleanup the subscription when the component unmounts
            return () => unsubscribe();
          }, []);

    return (
        <header>
            <div>
                <h1 className="logo"><NavLink to="/">JuDoMyKa</NavLink></h1>
            </div>
            <button className="menu_trigger" onClick={toggleMenu}><span className="material-symbols-outlined"> menu </span></button>
            <nav>
                <ul className={`mobile ${isOpen ? "is-open" : ""}`} >
                    <li><NavLink to="/"><h2>HOME</h2></NavLink></li>
                    
                    <li><NavLink to="/about"><h2>ABOUT</h2></NavLink></li>

                    {/* Login button replaced with conditional links */}
                    {/* <li><NavLink to="/auth" className="logIn_btn">LOG IN</NavLink></li> */}
                    {user ? <>
                            <li>
                                <NavLink className="logIn_btn" id="navAuth" to="/dashboard"><h2>DASHBOARD</h2></NavLink>
                            </li>

                            <li>
                                <NavLink  className="logIn_btn" id='navAuth' to="/products"><h2>PRODUCTS</h2></NavLink>
                            </li>

                            <li>
                                <NavLink className="logIn_btn" id='navAuth' onClick={handleLogout}>
                                <h2>LOGOUT</h2>
                                </NavLink>
                            </li>
                             </>: <>
                            <li>
                                <NavLink className="logIn_btn" id='navAuth' to='/auth'>
                                <h2>LOGIN</h2>
                                </NavLink>
                            </li>
                        </>}
                </ul>
            </nav >
        </header>
    );
}



