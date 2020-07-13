import React, { useEffect } from "react";
import useSlider from "./useSlider";

export default function Grid({ children }) {
  const { images } = useSlider();

  function renderImages(layout) {
    const imageList = children.map((element, i) => (
      <div className={`col-span-${layout[i] ?? 1} h-64`}>{element}</div>
    ));
    return imageList;
  }

  return (
    <div className="grid grid-cols-5 grid-flow-row gap-4 px-20">
      {renderImages([2,4,2,2,1,3,2,3,2,2])}
    </div>
  );
}
