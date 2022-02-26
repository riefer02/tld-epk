import React from "react"

export default function EmbedVideo({ videoId }) {
  return (
    <div className="embed__container">
      <iframe
        className="embed__video"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
