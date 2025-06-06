"use client";

import Image from "next/image";
import customPlayImage from "../../../public/favicon_io/customplay.png";

export default function CustomPlayButton() {
  return (
    <div className="custom-play-button">
      <Image
        src={customPlayImage}
        alt="Play"
      
        className="custom-play-icon"
      />
    </div>
  );
}