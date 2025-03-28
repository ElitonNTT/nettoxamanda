import React, { useState, useEffect } from "react";

// Placeholder for the relationship images - replace with your actual images
const images = [
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/ABOUT_IMAGE-2034.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-8721.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1733.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1797.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-5595.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/ABOUT_IMAGE-2034.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-8721.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1733.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1797.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-5595.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/ABOUT_IMAGE-2034.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-8721.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1733.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1797.jpeg",
  "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-5595.jpeg",
];

const startDate = new Date("2023-10-15");

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
}

const RelationshipBanner = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      setTimeElapsed({ days, hours, minutes });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden glass rounded-2xl animate-fade-in">
      <div className="relative w-full h-64 sm:h-80 overflow-hidden">
        <div className="absolute inset-0 flex animate-rotate-banner">
          {/* Double the images to create the continuous loop effect */}
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 px-1"
            >
              <img
                src={img}
                alt={`Relationship memory ${(idx % images.length) + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-6 bg-white/30 backdrop-blur-sm">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-script text-love-deeper mb-3">
          Nossa jornada começou há
        </h2>
        <div className="flex justify-center items-center space-x-4 text-love-dark">
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-bold">
              {timeElapsed.days}
            </span>
            <span className="text-sm">dias</span>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-bold">
              {timeElapsed.hours}
            </span>
            <span className="text-sm">horas</span>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="text-center">
            <span className="block text-3xl sm:text-4xl font-bold">
              {timeElapsed.minutes}
            </span>
            <span className="text-sm">minutos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipBanner;
