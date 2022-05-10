import React from "react";
// <span className="inline align-baseline"> {date} </span>
const ExperienceCard = ({
  experience: { title, description, tags, date, company },
}) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <div className="lg:flex justify-between">
        <div className="text-xl flex text-center font-bold  space-x-4">
          <h1>{title}</h1>
          <img src={company} width="30" alt="company" />
        </div>
        <span className="inline align-baseline"> {date} </span>
      </div>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => (
          <div className="px-4 py-1 border-2 rounded-full">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
