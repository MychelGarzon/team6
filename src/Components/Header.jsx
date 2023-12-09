import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    return (
        <header>
            <div>
                <h1 className="logo"><NavLink to="/">JuDoMyKa</NavLink></h1>
            </div>
            <button className="menu_trigger" onClick={toggleMenu}><span className="material-symbols-outlined"> menu </span></button>
            <nav>
                <ul className={`mobile ${isOpen ? "is-open" : ""}`} >
                    <li><NavLink to="/"><h2>HOME</h2></NavLink></li>
                    <li><NavLink to="/products"><h2>PRODUCTS</h2></NavLink></li>
                    <li><NavLink to="/about"><h2>ABOUT</h2></NavLink></li>
                    <li><button className="logIn_btn">LOG IN</button></li>
                </ul>
            </nav >
        </header>
    );
}



