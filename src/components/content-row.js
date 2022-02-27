import React, { useRef } from "react"
import useIntersectionObserver from "../lib/observer"

export default function ContentRow({ children, animation }) {
  const ref = useRef(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div
      ref={ref}
      className="page-content__row"
      data-sal={animation}
      data-sal-delay="300"
      data-sal-easing="ease-in"
    >
      {isVisible ? children : <div className="skeleton-loader"></div>}
    </div>
  )
}
