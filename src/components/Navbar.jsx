import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [active, setActive] = useState("home")
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="nav-bar">
            <div className="">
                <p className="first-name" style={{ color: "#6c63ff", fontWeight: "600", fontSize: "24px" }}>Deepesh</p>
                <p className="full-name" style={{ color: "#6c63ff", fontWeight: "600", fontSize: "24px" }}>Deepesh Pratap</p>
            </div>
            {/* Hamburger */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
            <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
                {["home", "about", "portfolio", "contact"].map((item) => (
                    <a key={item}
                    href={`#${item}`}
                    className={`nav-links ${active === item ? "active" : ""}`}
                    onClick={() => setActive(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
        </nav>
        </div>
    )
}

export default Navbar;