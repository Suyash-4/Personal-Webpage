/*eslint-disable */
import ProjectCards from "../components/ProjectCards.jsx";
const Projects = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center text-white p-5">
        <div className="sm:text-xl xl:text-2x font-extralight text-center">
          <ProjectCards />
        </div>
      </div>
    </>
  );
};

export default Projects;
