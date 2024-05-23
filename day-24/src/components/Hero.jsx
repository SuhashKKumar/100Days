const Hero = () => {
  return (
    <main className="hero-container flex flex-col px-2 my-9 items-center lg:flex-row lg:items-start lg:mt-14 lg:mb-0 lg:gap-3">
      <div className="left w-full lg:w-1/3 flex flex-col gap-5 items-start">
        <div className="offer-container flex flex-col w-full items-start gap-2 md:flex-row md:items-center lg:w-full lg:justify-between lg:gap-1">
          <p className="offer font-semibold md:text-2xl lg:text-sm lg:tracking-tighter ">
            GET 20% OFF THE FIRST PURCHASE
          </p>
          <button className="btn w-full text-black text-sm bg-gray-300 font-bold py-1 px-3 rounded-full md:w-fit lg:text-sm">
            MORE &rarr;
          </button>
        </div>
        <p className="headline text-7xl font-bold md:text-[9rem] lg:text-[4rem]">
          Buy Now. Pay Later. Simply
        </p>
        <p className="text-xl font-semibold md:text-3xl md:w-2/3 lg:text-2xl lg:w-full">
          Get what you love and split the payments up over weeks or months.
        </p>
        <button className="btn text-xl bg-black text-white py-3 px-8 ">
          Get the App
        </button>
        <div className="last-section my-6 w-full">
          <p className="font-bold mb-1 md:text-2xl md:mb-5 lg:mt-5 lg:text-sm lg:tracking-tighter ">TRUSTED BY</p>
          <div className="sponsors-container flex gap-3 justify-between">
            <img
              src="/assets/client-1.svg"
              className="sponsor"
              alt="client 1 logo"
            />
            <img
              src="/assets/client-2.svg"
              className="sponsor"
              alt="client 2 logo"
            />
            <img
              src="/assets/client-3.svg"
              className="sponsor"
              alt="client 3 logo"
            />
          </div>
        </div>
      </div>
      <hr className="my-5 lg:hidden" />
      <div className="middle w-full lg:w-1/3 lg:self-end">
        <img
          src="/assets/hero-bg-2.jpg"
          className="h-[25rem] w-fit lg:h-full"
          alt="showcasing new credit cards"
        />
      </div>
      <hr className="my-5 lg:hidden" />
      <div className="right flex flex-col gap-16 my-6 w-full lg:w-1/3 lg:gap-6 lg:ps-3">
        <div className="flex flex-col">
          <p className="text-xl font-semibold md:text-3xl lg:text-2xl ">
            Time and flexibility are on your side. Download our app and get your
            own limitless virtual card.
          </p>
          <div className="flex items-center gap-3 my-3">
            <p className="font-semibold order-1 md:text-lg lg:text-sm lg:tracking-tighter">See how it works</p>
            <div className="bg-gray-100 p-2 order-0 ">
              <img src="/assets/video-icon.svg" className="h-8" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:text-center lg:text-start">
          <p className="font-bold md:text-xl lg:text-sm lg:tracking-tighter">SPLIT IN NUMBERS</p>
          <div className="md:flex md:justify-around md:text-center lg:flex-col lg:text-start lg:gap-4" >
            <div>
              <h1 className="text-7xl font-bold">1.45M</h1>
              <p className="text-xl font-semibold md:text-2xl lg:text-lg ">
                Total count of active users
              </p>
            </div>
            <div>
              <h1 className="text-7xl font-bold">
                175K
                <span className="text-sm font-normal text-gray-300">
                  /per month
                </span>
              </h1>
              <p className="text-xl font-semibold md:text-2xl lg:text-lg">
                Downloads from all type of stores
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-center lg:items-start">
          <p className="font-bold mb-3 md:text-xl lg:text-sm lg:tracking-tighter">
            OVER 20.8K+ <span className="underline">REVIEWS</span>
          </p>
          <div className="users-container flex mx-4">
            <img
              src="/assets/user-1.jpg"
              alt="user-1 image"
              className="w-14 rounded-full border-2 border-gray-100 -mx-3 md:w-15"
            />
            <img
              src="/assets/user-2.jpg"
              alt="user-2 image"
              className="w-14 rounded-full border-2 border-gray-100 -mx-3 md:w-15"
            />
            <img
              src="/assets/user-3.jpg"
              alt="user-3 image"
              className="w-14 rounded-full border-2 border-gray-100 -mx-3 md:w-15"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
