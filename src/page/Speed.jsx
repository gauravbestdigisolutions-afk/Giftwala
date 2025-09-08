import React from "react";
import { FaClock, FaStar, FaAward } from "react-icons/fa";


const Speed = () => {
  const features = [
    {
      icon: FaClock,
      title: "Speed",
      description:
        "Same day, next day and 3 hours rush printing. Specialities in 3 days",
    },
    {
      icon: FaStar,
      title: "Luxury",
      description:
        "Mix and match gorgeous oil color or white ink painting with a variety of paper options.",
    },
    {
      icon: FaAward,
      title: "Guaranteed Satisfaction",
      description:
        "Print your heart out with confidence. We got you, pinky promise.",
    },
  ];

  return (
    <div className="speed-container">
      <div className="features-container">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="feature-card">
              <div className="icon-circle">
                <Icon size={30} color="#fff" />
              </div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speed;
