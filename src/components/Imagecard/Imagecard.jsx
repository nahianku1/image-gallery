import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { forwardRef, useEffect, useState } from "react";

//Receiving all required props and ref from Home Components
function Imagecard({ url, item, selectedArr, setSelectedArr }, ref) {
  let [selected, setSelected] = useState(false); // Declaring selected state
  let [checked, setChecked] = useState(false); // Declaring checked state

  //calling useSortable hook from @dnd-kit/sortable to get required attributes,listeners,setNodeRef and style properties
  let { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });
  // Declaring handleSelected function to select item and setting them to selected item array.
  let handleSelected = () => {
    setSelectedArr((c) => [...c, item]);
  };
  // Declaring handleDeselected function to Deselect item
  let handleDeselected = () => {
    let deselectedarr = selectedArr.filter((element) => element.id !== item.id);
    setSelectedArr(deselectedarr);
  };

  //Calling useEffect to finally select items from the selected array
  // this effect called when every item selected array is changed.
  useEffect(() => {
    selectedArr.forEach((ele) => {
      if (ele.id === item.id) {
        setChecked(true);
        setSelected(true);
      }
    });
  }, [selectedArr]);

  //declaring style to modify dragging element from @dnd-kit/utilities
  let style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <div
        {...attributes} //spreading attributes
        style={style}
        ref={setNodeRef} // passing ref is necessary
        className={`border-2 relative  ${
          //adding different styles when it is first element in image array
          ref?.current && "col-start-1 col-end-3 row-start-1 row-end-3"
        } rounded-lg`}
      >
        {selected && (
          //Displaying when item is selected
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
          //Displaying when item is not selected
          <div className="group">
            <input
              type="checkbox"
              className="mt-[10px] opacity-0 group-hover:opacity-100 z-50 absolute ml-[10px]"
              checked={checked}
              onChange={handleSelected}
            />
            <div
              {...listeners} // passing listeners to listen drag events
              className="duration-500 opacity-0 group-hover:opacity-100 hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg"
            ></div>
          </div>
        )}
        <img className="rounded-lg" src={url} alt="" />
      </div>
    </>
  );
}

export default forwardRef(Imagecard); // called to forward the first item ref
