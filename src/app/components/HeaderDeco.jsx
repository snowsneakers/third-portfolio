"use client";

import { useState } from "react";

export default function HeaderDeco() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const sensitivity = 0.03; // Adjust the sensitivity of the movement

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const newPos_X = offsetX * sensitivity;
    const newPos_Y = offsetY * sensitivity;

    setPosX(newPos_X);
    setPosY(newPos_Y);
  };

  //   const handleMouseLeave = () => {
  //     setPosX(0);
  //     setPosY(0);
  //   };

  return (
    <div
      id="container"
      className="w-full h-full absolute top-0 left-0"
      onMouseMove={handleMouseMove}
      //   onMouseLeave={handleMouseLeave}
    >
      <a href="https://www.nba.com/lakers">
        <img
          id="image"
          src="./logos/lakers_logo.svg"
          alt="lakers logo"
          style={{
            transform: `translate(${posX}px, ${posY}px)`,
            transition: "transform 0.1s ease-out",
          }}
          className="w-[125px] drop-shadow-lg absolute top-[5%] right-[25%] select-none"
        />
      </a>
    </div>
  );
}
