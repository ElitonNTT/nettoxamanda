import React, { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationSpeed: "fast" | "normal" | "slow";
}

const PulsatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Create 30 random hearts for the background
    const numberOfHearts = 30;
    const newHearts: Heart[] = [];

    for (let i = 0; i < numberOfHearts; i++) {
      const speed = Math.random();
      let animationSpeed: "fast" | "normal" | "slow";

      if (speed < 0.33) {
        animationSpeed = "fast";
      } else if (speed < 0.66) {
        animationSpeed = "normal";
      } else {
        animationSpeed = "slow";
      }

      newHearts.push({
        id: i,
        x: Math.random() * 100, // % position
        y: Math.random() * 100, // % position
        size: Math.random() * 3 + 1, // rem size between 1-4
        opacity: Math.random() * 0.6 + 0.2, // opacity between 0.2-0.8
        animationSpeed,
      });
    }

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute text-[#f30404] animate-pulse-heart${
            heart.animationSpeed === "normal" ? "" : `-${heart.animationSpeed}`
          }`}
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}rem`,
            opacity: heart.opacity,
          }}
          aria-hidden="true"
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default PulsatingHearts;
