import { useState } from "react";
import { FaRegImage } from "react-icons/fa6";

function Home() {
  let [filechecked, setFileChecked] = useState(false);
  let [selected, setSelected] = useState(false);
  let [checked, setChecked] = useState(false);
  let [filecount, setFileCount] = useState(2);
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-slate-200">
      <div className="bg-white w-[520px] md:w-[65%] rounded-lg shadow-lg ">
        <div className="flex justify-between items-center border-b-2 px-[35px] py-[15px]">
          <div>
            {filecount < 1 && (
              <div>
                <h1 className="font-bold  text-gray-700 text-[18px]">
                  Gallery
                </h1>
              </div>
            )}

            {filecount > 0 && (
              <div className="flex gap-[10px]">
                <input type="checkbox" checked={filechecked} />
                <h1 className="font-bold  text-gray-700 text-[18px]">
                  {filecount} Files Selected
                </h1>
              </div>
            )}
          </div>

          {selected && (
            <h1 className="text-red-500 font-semibold text-[15px]">
              Delete files
            </h1>
          )}
        </div>
        <div className="grid gap-[15px] p-[30px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] [grid-auto-rows:1fr]">
          <div
            className={`border-2 relative group ${
              selected ? "opacity-50" : ""
            } col-start-1 col-end-3 row-start-1 row-end-3 rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-1.webp" alt="" />
          </div>{" "}
          <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-2.webp" alt="" />
          </div>
          <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div> <div
            className={`border-2 relative group${
              selected ? "opacity-50" : ""
            }  rounded-lg`}
          >
            <div className="bg-black duration-500 opacity-0 group-hover:opacity-100 h-full w-full absolute bg-[rgba(0,0,0,0.4)] rounded-lg">
              <input
                type="checkbox"
                className="mt-[10px] ml-[10px]"
                checked={checked}
              />
            </div>
            <img className="rounded-lg" src="/images/image-3.webp" alt="" />
          </div>
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
