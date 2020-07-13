import React, { useState, useEffect } from "react";

function useSlider() {
  const [images, setImages] = useState([]);

  function renderImages() {
    const imageList = images.map((element, i) => (
      <img className="h-full w-full object-cover" src={element.sourceUrl} />
    ));
    return imageList;
  }

  useEffect(() => {
    // console.log(images);
  }, [images]);

  return { images, setImages, renderImages };
}

export default useSlider;
