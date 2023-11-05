import { useRef, useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import Imagecard from "../Imagecard/Imagecard";

import imagesarr from "../../../imagejson.json";
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

function Home() {
  let [imageArr, setImageArr] = useState(imagesarr); //Declaring imageArr state
  let [selectedArr, setSelectedArr] = useState([]); //Declaring selectedArr state

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );
  //Delete function
  let handleDelete = () => {
    //Filtering all items in selected array will be removed
    let filterredarr = imageArr.filter((obj1) =>
      selectedArr.every((obj2) => obj1.id !== obj2.id)
    );
    //Setting filterredarr to new ImageArr state
    setImageArr(filterredarr);
    //Setting selectedArr to empty
    setSelectedArr([]);
  };

  //declaring ref which will be used to detect first element in the image array
  let first = useRef("first");

  //Declaring onDragend function to rearrange the items
  let onDragEnd = (event) => {
    let { active, over } = event;
    if (active.id !== over.id) {
      setImageArr((arr) => {
        let oldIndex = arr.findIndex((item) => item.id === active.id);
        let newIndex = arr.findIndex((item) => item.id === over.id);
        return arrayMove(arr, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-slate-200">
      {/* Gallery Header Start */}
      <div className="bg-white w-[520px] md:w-[65%] rounded-lg shadow-lg ">
        <div className="flex justify-between items-center border-b-2 px-[35px] py-[15px]">
          <div>
            {selectedArr.length < 1 && (
              <div>
                <h1 className="font-bold  text-gray-700 text-[18px]">
                  Gallery
                </h1>
              </div>
            )}

            {selectedArr.length > 0 && (
              <div className="flex gap-[10px]">
                <input
                  className="w-[18px]"
                  type="checkbox"
                  checked={selectedArr.length > 0}
                />
                <h1 className="font-bold  text-gray-700 text-[18px]">
                  {selectedArr.length} Files Selected
                </h1>
              </div>
            )}
          </div>

          {selectedArr.length > 0 && (
            <h1
              onClick={handleDelete}
              className="text-red-500 hover:underline hover:underline-offset-3 cursor-pointer font-semibold text-[15px]"
            >
              Delete files
            </h1>
          )}
        </div>

        {/* Gallery Header End */}

        {/* Image Grid start */}
        <div className="grid gap-[15px] p-[30px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] [grid-auto-rows:1fr]">
          {/* wrapping  SortableContext with DndContext context component */}
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
          >
            {/* wrapping  Imagecard with SortableContext context component */}
            <SortableContext items={imageArr} strategy={rectSortingStrategy}>
              {imageArr.map((item, index) =>
                index === 0 ? (
                  <Imagecard
                    key={crypto.randomUUID()}
                    url={item.url}
                    item={item}
                    selectedArr={selectedArr}
                    setSelectedArr={setSelectedArr}
                    ref={first}
                  />
                ) : (
                  <Imagecard
                    key={crypto.randomUUID()}
                    url={item.url}
                    item={item}
                    selectedArr={selectedArr}
                    setSelectedArr={setSelectedArr}
                  />
                )
              )}
            </SortableContext>
          </DndContext>
          <div className="border-2 rounded-lg flex flex-col justify-center items-center">
            <FaRegImage />
            <h1 className="text-center">Add Images</h1>
          </div>
        </div>
        {/* Image Grid Ends */}
      </div>
    </div>
  );
}

export default Home;
