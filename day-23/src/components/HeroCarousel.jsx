const HeroCarousel = () => {
  return (
    <main className="slider flex flex-col-reverse lg:flex-row bg-gray-200 items-center mx-2 2xl:mx-12 lg:px-10 lg:py-20 ">
      <div className="left p-6 flex flex-col gap-3 items-start lg:w-1/2">
      <p className="bg-yellow-400 text-black px-4 py-1 font-semibold" >New</p>
        <h1 className="text-2xl md:text-3xl font-bold">Surface Laptop 4</h1>
        <p className="text-sm w-3/4" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          condimentum fringilla massa vitae condimentum. Curabitur cursus felis
          eu leo dignissim blandit.
        </p>
        <button className="bg-[#0067b8] text-white px-4 py-2 font-semibold" >Shop Now</button>
      </div>
      <div className="right lg:w-1/2">
        <img src="https://source.unsplash.com/random/?laptop" className="lg:h-96 w-fit" alt="laptop" />
      </div>
    </main>
  );
};

export default HeroCarousel;
