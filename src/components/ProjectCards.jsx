import React from "react";

const ProjectCards = () => {
  return (
    <>
      {/* Card Container Properties */}
      <div className="w-full flex flex-wrap gap-10 ">
        {/* Card Properties... */}
        {/* Card1 */}
        <div className="w-80 h-fit border border-white/20 rounded-4xl overflow-hidden">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg"
              alt="template_img"
              className="bg-cover object-fill"
            />
          </div>
          <div className="p-5 text-white">
            <h1>Project 1</h1>
            <div>
              <p className="text-lg text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                perferendis doloremque excepturi sint cupiditate? Voluptas qui
                praesentium, impedit necessitatibus molestias ullam fuga,
                reprehenderit possimus tempore, ex aliquid iure nulla
                repudiandae.
              </p>
            </div>
          </div>
        </div>
        {/* Card2 */}
        <div className="w-80 h-fit border border-white/20 rounded-4xl overflow-hidden">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/abstract-background-yellow-red-texture-grainy_474888-5049.jpg"
              alt="template_img"
            />
          </div>
          <div className="p-5 text-white">
            <h1>Project 2</h1>
            <div>
              <p className="text-lg text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                perferendis doloremque excepturi sint cupiditate? Voluptas qui
                praesentium, impedit necessitatibus molestias ullam fuga,
                reprehenderit possimus tempore, ex aliquid iure nulla
                repudiandae.
              </p>
            </div>
          </div>
        </div>
        {/* Card3 */}
        <div className="w-80 h-fit border border-white/20 rounded-4xl overflow-hidden">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/abstract-background-red-texture-grainy_474888-5125.jpg?t=st=1759679504~exp=1759683104~hmac=eb56eca8171ee293334ec86297e68e9ce6586791be353ee3a1ee2d457fe28d63&w=1480"
              alt="template_img"
            />
          </div>
          <div className="p-5 text-white">
            <h1>Project 3</h1>
            <div>
              <p className="text-lg text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                perferendis doloremque excepturi sint cupiditate? Voluptas qui
                praesentium, impedit necessitatibus molestias ullam fuga,
                reprehenderit possimus tempore, ex aliquid iure nulla
                repudiandae.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 h-fit border border-white/20 rounded-4xl overflow-hidden">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/abstract-background-red-texture-grainy_474888-5125.jpg?t=st=1759679504~exp=1759683104~hmac=eb56eca8171ee293334ec86297e68e9ce6586791be353ee3a1ee2d457fe28d63&w=1480"
              alt="template_img"
            />
          </div>
          <div className="p-5 text-white">
            <h1>Project 3</h1>
            <div>
              <p className="text-lg text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                perferendis doloremque excepturi sint cupiditate? Voluptas qui
                praesentium, impedit necessitatibus molestias ullam fuga,
                reprehenderit possimus tempore, ex aliquid iure nulla
                repudiandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
