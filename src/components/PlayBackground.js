import React from "react";
import ReactPlayer from "react-player";
import "./playBackground.css";

const PlayBackground = () => {
  return (
    <ReactPlayer
      className="actual-video"
      url="videos/background.mp4"
      playing
      loop={true}
      muted
    />
  );
};

export default PlayBackground;
