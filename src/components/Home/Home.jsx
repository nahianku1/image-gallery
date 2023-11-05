import { useRef, useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import Imagecard from "../Imagecard/Imagecard";

import imagesarr from "../../../imagejson.json";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arraySwap,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";

function Home() {
  console.log(`Rendered Home`);
  let [imageArr, setImageArr] = useState(imagesarr);
  let [selectedArr, setSelectedArr] = useState([]);

  console.log(selectedArr);

  let handleDelete = () => {
    let filterredarr = imageArr.filter((obj1) =>
      selectedArr.every((obj2) => obj1.id !== obj2.id)
    );
    console.log(filterredarr);
    setImageArr(filterredarr);
    setSelectedArr([]);
  };

  let first = useRef("first");

  let onDragEnd = (event) => {
    let { active, over } = event;
    if (active.id !== over.id) {
      setImageArr((arr) => {
        let oldIndex = arr.findIndex((item) => item.id === active.id);
        let newIndex = arr.findIndex((item) => item.id === over.id);
        return arraySwap(arr, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-slate-200">
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
                <input type="checkbox" checked={selectedArr.length > 0} />
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
        <div className="grid gap-[15px] p-[30px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] [grid-auto-rows:1fr]">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={imageArr} strategy={rectSwappingStrategy}>
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
      </div>
    </div>
  );
}

export default Home;
