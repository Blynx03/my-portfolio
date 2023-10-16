import React from "react";
import ReactPlayer from "react-player";
import "./playBackground.css";

const PlayBackground = () => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        className="actual-video"
        url={`${process.env.PUBLIC_URL}/videos/Background.mp4`}
        playing
        loop={true}
        muted
      />
    </div>
  );
};

export default PlayBackground;
