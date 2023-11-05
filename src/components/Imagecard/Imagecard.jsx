import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { forwardRef, useEffect, useRef, useState } from "react";

function Imagecard({ url, item, selectedArr, setSelectedArr }, ref) {
  console.log(`Imagecard Rerender`);
  let [selected, setSelected] = useState(false);
  let [checked, setChecked] = useState(false);

  let { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  let handleSelected = () => {
    console.log(`handleSelected called `);
    setSelectedArr((c) => [...c, item]);
    console.log(selectedArr);
  };

  let handleDeselected = () => {
    let deselectedarr = selectedArr.filter((element) => element.id !== item.id);
    console.log(`handleDeselected called`);
    setSelectedArr(deselectedarr);
  };

  useEffect(() => {
    console.log(`useEffect runed`);
    selectedArr.forEach((ele) => {
      if (ele.id === item.id) {
        setChecked(true);
        setSelected(true);
      }
    });
  }, [selectedArr]);

  let style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <div
        {...attributes}
        style={style}
        ref={setNodeRef}
        className={`border-2 relative  ${
          ref?.current && "col-start-1 col-end-3 row-start-1 row-end-3"
        } rounded-lg`}
      >
        {selected && (
          <>
            <input
              type="checkbox"
              className="ml-[10px] z-50 absolute mt-[10px]"
              checked={checked}
              onChange={handleDeselected}
            />
            <div
              {...listeners}
              className={`absolute bg-white w-full h-full  ${
                selected ? "opacity-50" : ""
              } `}
            ></div>
          </>
        )}
        {!selected && (
          <>
            <input
              type="checkbox"
              className="mt-[10px] z-50 absolute ml-[10px]"
              checked={checked}
              onChange={handleSelected}
            />
            <div
              {...listeners}
              className="duration-500 opacity-0 hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg"
            ></div>
          </>
        )}
        <img className="rounded-lg" src={url} alt="" />
      </div>
    </>
  );
}

export default forwardRef(Imagecard);
