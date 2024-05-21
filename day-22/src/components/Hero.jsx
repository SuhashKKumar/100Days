const Hero = () => {
  return (
    <main className="flex justify-around py-40 bg-slate-200">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="text-6xl font-bold">The best phones in the town.</h1>
        <p className="w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
          nibh ipsum. Phasellus tincidunt est eget diam sodales pharetra. Ut
          iaculis eu neque.
        </p>
        <div className="flex gap-10">
          <button className="px-8 py-2 text-white transition duration-300 ease-in-out bg-purple-800 d-150 rounded-3xl hover:bg-purple-900">
            Buy Now
          </button>
          <button className="px-8 py-2 text-white transition duration-300 ease-in-out bg-purple-800 d-150 rounded-3xl hover:bg-purple-900">
            Contact Us
          </button>
          <button className="btn">button</button>
          <button className="px-10 text-red-600 bg-green-600 rounded-full text-wired">
            button
          </button>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random"
        className="rounded-full shadow-2xl w-72 h-72"
      />
    </main>
  );
};

export default Hero;
