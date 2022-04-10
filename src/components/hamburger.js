import React, { useState } from "react"

export default function Hamburger() {
  const [isOpen, setOpen] = useState()

  return (
    <div className="hamburger__container">
      <button className="hamburger__button">
        <div className="hamburger__line-group">
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
      </button>
    </div>
  )
}
