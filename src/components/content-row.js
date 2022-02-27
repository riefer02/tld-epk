import React from "react"

export default function ContentRow({ children, animation }) {
  return (
    <div
      className="page-content__row"
      data-sal={animation}
      data-sal-delay="400"
      data-sal-easing="ease-in"
    >
      {children}
    </div>
  )
}
