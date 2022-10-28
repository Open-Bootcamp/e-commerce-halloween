import React from "react";

function Category({img, title, desc}) {
  return (
    <div className="flex flex-col w-52">
      <img
        src={img}
        className=" mx-auto h-52 transition-all duration-300 hover:-translate-y-4"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Category;