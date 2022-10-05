import React from "react";

function About({ title, description }) {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
        {description}
      </p>
    </div>
  );
}

export default About;
