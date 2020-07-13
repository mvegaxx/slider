import React, { CSSProperties } from "react";
import { ReactElement } from "react";

interface IGrid {
  imageList: ReactElement[];
  dense?: boolean;
  gap?: string;
  elementsHeight?: string;
  columns?: number;
  colLayout?: number[] | undefined;
  rowLayout?: number[] | undefined;
}

function Grid({
  imageList,
  dense,
  gap,
  columns,
  colLayout,
  rowLayout,
  elementsHeight,
}: IGrid) {
  const gridStyle: CSSProperties = {
    gridGap: gap,
    gridAutoFlow: dense ? "row dense" : "",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gridAutoRows: elementsHeight,
  };
  const gridElementStyle: CSSProperties = { height: elementsHeight };

  function renderImages() {
    return imageList.map((element, i) => (
      <div
        // className={`col-span-${colLayout ? colLayout[i] : 1}  `}
        style={
          
          {
            // height: elementsHeight,
            // gridColumn: `span ${colLayout ? colLayout[i] : 1} / span ${
            //   colLayout ? colLayout[i] : 1
            // }`,
            // gridRow: `span ${rowLayout ? rowLayout[i] : 1} / span ${
            //   rowLayout ? rowLayout[i] : 1
            // }`,
            gridArea: `span ${rowLayout ? rowLayout[i] : 1} / span ${
              colLayout ? colLayout[i] : 1 }`,
            
          }
        }
      >
        {element}
      </div>
    ));
  }

  return (
    <div className={`grid transition-all duration-300`} style={gridStyle}>
      {renderImages()}
    </div>
  );
}

export default Grid;
