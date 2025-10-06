import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    imageUrl:
      "https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis doloremque excepturi sint cupiditate? Voluptas qui praesentium, impedit necessitatibus molestias ullam fuga, reprehenderit possimus tempore, ex aliquid iure nulla repudiandae.",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl:
      "https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg",
    description:
      "This is the description for the second project. It has different text to show that the cards are now dynamic and data-driven.",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl:
      "https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg",
    description:
      "And here is the third project. Refactoring like this makes it much easier to add, remove, or update projects in the future!",
  },
];

const ProjectCards = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const projectClickHandler = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`w-[98%] max-w-xs sm:max-w-sm border border-white/20 rounded-4xl overflow-hidden mx-auto cursor-pointer transition-all duration-500 ease-in-out ${
              openCardIndex === index ? "h-fit" : "h-10 sm:h-48"
            }`}
            onClick={() => projectClickHandler(index)}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 sm:p-5 text-white">
              <h1 className="text-base sm:text-lg font-medium text-center">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-justify leading-relaxed mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
