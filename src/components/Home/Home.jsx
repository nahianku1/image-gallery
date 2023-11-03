function Home() {
  return (
    <div className="w-full p-[50px] min-h-screen bg-slate-200">
      <div className="bg-white rounded-lg shadow-lg ">
        <div>
          <h1 className="font-bold border-b-2 px-[35px] py-[15px] text-gray-700 text-[18px]">
            Gallery
          </h1>
        </div>
        <div className="grid gap-[15px] p-[30px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))]">
          <div className="border-2 rounded-lg">
            <img src="/images/image-1.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-2.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-3.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-4.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-5.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-6.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-7.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-8.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-9.webp" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-10.jpeg" alt="" />
          </div>{" "}
          <div className="border-2 rounded-lg">
            <img src="/images/image-11.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
