import React from "react"

export default function SpotifyPlayer({ playlist }) {
  const { type, id, label } = playlist

  return (
    <div className="spotify-player">
      <iframe
        title={`The Lewd Dudes Album: ${label}`}
        src={`https://open.spotify.com/embed/${type}/${id}`}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          border: 0,
        }}
        allowFullScreen
        allow="encrypted-media;"
      ></iframe>
    </div>
  )
}
