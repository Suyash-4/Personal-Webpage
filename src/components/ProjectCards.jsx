import React from "react";

const ProjectCards = () => {
  return (
    <>
      {/* Card Container Properties */}
      <div className="w-full flex flex-wrap gap-7 ">
        {/* Card Properties... */}
        {/* Card1 */}
        <div className="w-[98%] max-w-xs sm:max-w-sm h-fit border border-white/20 rounded-4xl overflow-hidden mx-auto">
          <div>
            <img
              src="https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg"
              alt="template_img"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 text-white">
            <h1 className="text-base sm:text-lg font-medium text-center">
              Project 1
            </h1>
            <p className="text-sm sm:text-base text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perferendis doloremque excepturi sint cupiditate? Voluptas qui
              praesentium, impedit necessitatibus molestias ullam fuga,
              reprehenderit possimus tempore, ex aliquid iure nulla repudiandae.
            </p>
          </div>
        </div>
        <div className="w-[98%] max-w-xs sm:max-w-sm h-fit border border-white/20 rounded-4xl overflow-hidden mx-auto">
          <div>
            <img
              src="https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg"
              alt="template_img"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 text-white">
            <h1 className="text-base sm:text-lg font-medium text-center">
              Project 1
            </h1>
            <p className="text-sm sm:text-base text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perferendis doloremque excepturi sint cupiditate? Voluptas qui
              praesentium, impedit necessitatibus molestias ullam fuga,
              reprehenderit possimus tempore, ex aliquid iure nulla repudiandae.
            </p>
          </div>
        </div>
        <div className="w-[98%] max-w-xs sm:max-w-sm h-fit border border-white/20 rounded-4xl overflow-hidden mx-auto">
          <div>
            <img
              src="https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg"
              alt="template_img"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 text-white">
            <h1 className="text-base sm:text-lg font-medium text-center">
              Project 1
            </h1>
            <p className="text-sm sm:text-base text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perferendis doloremque excepturi sint cupiditate? Voluptas qui
              praesentium, impedit necessitatibus molestias ullam fuga,
              reprehenderit possimus tempore, ex aliquid iure nulla repudiandae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
