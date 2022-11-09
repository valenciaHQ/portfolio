import React from "react";

function About({ title, description }) {
  return (
    <section className="max-w-4xl mx-auto mt-16">
      <p className="text-base text-left md:text-center t leading-relaxed mt-4 text-gray-600 dark:text-white">
        {description}
      </p>
    </section>
  );
}

export default About;
