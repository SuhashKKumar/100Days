const VideoSection = () => {
  return (
    <div className="bg-sky-blue-50">
      <div className="video-bg bg-center bg-cover bg-no-repeat rounded-3xl bg-sky-blue-50 text-center text-white w-[95%] mx-auto lg:h-[25rem] lg:w-[90%]">
        <div className="flex flex-col gap-2 h-full backdrop-blur-2xl justify-center items-center">
          <p className="text-sm md:text-xl">PRODUCT TOUR</p>
          <p className="text-5xl font-bold md:text-7xl">
            How <span className="brush-font text-6xl md:text-8xl ">Surfe</span>
            works
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
