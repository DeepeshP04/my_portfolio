import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [active, setActive] = useState("home")
    return (
        <div className="nav-bar">
            <div className="">
                <p style={{ color: "#6c63ff", fontWeight: "600", fontSize: "24px", margin: "0" }}>Deepesh Pratap</p>
            </div>
            <nav className="nav-container">
                {["home", "about", "portfolio", "contact"].map((item) => (
                    <a key={item}
                    href={`#${item}`}
                    className={`nav-links ${active === item ? "active" : ""}`}
                    onClick={() => setActive(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}

            {/* <a className="nav-links" href="#home">Home</a>
            <a className="nav-links" href="#about">About</a>
            <a className="nav-links" href="#portfolio">Portfolio</a>
            <a className="nav-links" href="#contact">Contact</a> */}
        </nav>
        </div>
    )
}

export default Navbar;