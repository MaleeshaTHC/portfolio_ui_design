import { useState } from "react"
import "../style/NavbarStyle.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/hero" className="brand-name">
        KRYPTO
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
      <svg viewBox='0 0 8 6' width='30'>
        <path d='M1 1h8M1 4h 8M1 7h8' 
              stroke='#000' 
              stroke-height='1'
              stroke-width='1' 
              stroke-linecap='none'/>
      </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/buy">BuyNFTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}