import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/"><h1>JuDoMyKa</h1></NavLink></li>
                <li><NavLink to="/"><h2>HOME</h2></NavLink></li>
                <li><NavLink to="/products"><h2>PRODUCTS</h2></NavLink></li>
                <li><NavLink to="/about"><h2>ABOUT</h2></NavLink></li>
                <button className="logIn_btn">LOG IN</button>
            </ul>
        </nav>
    )
}

export default Header;

