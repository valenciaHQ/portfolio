import React from "react";
import SectionCard from "./SectionCard";

function Section({ data, title }) {
  return (
    <section>
      {title && <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">{title}</h1>}
      <div className="flex flex-wrap flex-col sm:flex-row align-center justify-around max-w-2xl mx-auto mt-8">
        {data.map((item) => {
          return (
            <SectionCard sectionName={item.inputName} sectionIcon={item.inputIcon} />
          );
        })}
      </div>
    </section>
  );
}

export default Section;
