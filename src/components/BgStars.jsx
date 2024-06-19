"use client";
import { StarIcon } from "@/utils/svgs";
import { useEffect, useState } from "react";

const BgStars = () => {
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="absolute overflow-hidden left-0 top-0 w-full h-full">
      {stars.map((star) => (
        <Stars key={star} />
      ))}
    </div>
  );
};

const Stars = (star) => {
  const colors = ["#d434fe", "#fff", "#b7b7b8"];
  const animations = ["animate-bounces", "animate-pings"];
  const [randomColors, setRandomColors] = useState("");
  const [randomAnimations, setRandomAnimations] = useState("");
  const [transitions, setTransitions] = useState("");
  const [positionY, setPositionY] = useState(0);
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    setRandomColors(colors[Math.floor(Math.random() * colors.length)]);
    setPositionX(Math.floor(Math.random() * 100));
    setPositionY(Math.floor(Math.random() * 100));
    setRandomAnimations(
      animations[Math.floor(Math.random() * animations.length)]
    );
  }, []);
  const handleRunningStars = () => {
    setRandomAnimations("animate-spin");
    setTransitions("duration-500 ease-linear");
    setTimeout(() => {
      setPositionX(Math.floor(Math.random() * 100));
      setPositionY(Math.floor(Math.random() * 100));
    }, 1000);
    setTimeout(() => {
      setRandomAnimations(
        animations[Math.floor(Math.random() * animations.length)]
      );
    }, 1500);
  };
  return (
    <span
      onClick={handleRunningStars}
      className={`absolute ${randomAnimations} ${transitions}`}
      style={{
        color: randomColors,
        opacity: randomColors === "" ? 0 : 1,
        left: `${positionX}%`,
        top: `${positionY}%`,
      }}
    >
      <StarIcon width={24} />
    </span>
  );
};

export default BgStars;
