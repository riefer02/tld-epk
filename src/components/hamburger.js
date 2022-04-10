import React from "react"

export default function Hamburger({ navOpen, setNavOpen }) {
  return (
    <div className="hamburger__container">
      <button
        onClick={() => setNavOpen(!navOpen)}
        className={`hamburger__button ${
          navOpen ? "hamburger--open" : "hamburger--closed"
        }`}
      >
        <div className="hamburger__line-group">
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
      </button>
    </div>
  )
}
