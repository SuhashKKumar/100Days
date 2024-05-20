const Hero = () => {
  return (
    <main className="bg-slate-200 py-40 ps-6 flex justify-around ">
      <div className="flex flex-col gap-5 items-start ">
        <h1 className="text-6xl  font-bld">The best phones in the town.</h1>
        <p className="w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
          nibh ipsum. Phasellus tincidunt est eget diam sodales pharetra. Ut
          iaculis eu neque.
        </p>
        <div className="flex gap-10">
          <button className="bg-purple-800 px-8 py-2 rounded-3xl text-white hover:text-slate-900 hover:bg-fuchsia-400">
            Buy Now
          </button>
          <button className="bg-purple-800 px-8 py-2 rounded-3xl text-white hover:text-slate-900 hover:bg-fuchsia-400">
            Contact Us
          </button>
        </div>
      </div>
    <img src="https://source.unsplash.com/random" className="w-72 h-72 rounded-full shadow-2xl" />
    </main>
  );
};

export default Hero;
