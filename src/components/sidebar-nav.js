import React from "react"
import { navigationItems } from "../lib/navigation"

export default function SidebarNav({ navOpen }) {
  return (
    <div
      className={`sidebar-nav ${
        navOpen ? "sidebar-nav--open" : "sidebar-nav--closed"
      }`}
    >
      <div className="sidebar-nav__content">
        <div className="sidebar-nav__list">
          {navigationItems.map((navItem, index) => (
            <a key={index} href={navItem.url} className="sidebar-nav__item">
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
