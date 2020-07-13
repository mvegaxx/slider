import React, { useState, useEffect } from "react";

function useSlider() {
  const [images, setImages] = useState<Object[]>([]);

  function renderImages() {
    const imageList = images.map((element, i) => (
      <img className="h-full w-full object-cover bg-fixed" src={element.sourceUrl} />
    ));
    return imageList;
  }

  useEffect(() => {
    // console.log(images);
  }, [images]);

  return { images, setImages, renderImages };
}

export default useSlider;
