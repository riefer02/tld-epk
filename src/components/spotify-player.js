import React from "react"

export default function SpotifyPlayer({ type, spotifyId }) {
  return (
    <div className="spotify-player">
      <iframe
        src={`https://open.spotify.com/embed/${type}/${spotifyId}`}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          border: 0,
        }}
        allowfullscreen
        allow="encrypted-media;"
      ></iframe>
    </div>
  )
}
