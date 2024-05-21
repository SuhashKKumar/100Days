const Facebook = () => {
  return (
    <div className="facebook-container bg-slate-100 h-[50rem] grid place-items-center">
      <div className="flex justify-center gap-20 items-center">
        <div className="left flex flex-col items-start w-1/2">
          <img
            src="/assets/facebook-logo.svg"
            className="w-96"
            alt="facebook logo"
          />
          <p className="text-2xl mx-9">
            Facebook helps you connect and share with people in your life.
          </p>
        </div>
        <div className="right flex-col w-1/3 flex gap-8">
          <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-4 shadow-lg">
            <input
              type="email"
              className="border border-solid px-2 py-3 w-full  border-slate-300 rounded-md"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className="border-solid px-2 py-3 w-full border-slate-300 rounded-md border"
              placeholder="Password"
            />
            <button className="text-white bg-blue-600 py-[8px] w-[100%] font-bold rounded-md">
              Log In
            </button>
            <a className="text-blue-600">Forgotten password?</a>
            <hr className="border-t w-[100%] border-solid border-slate-300" />
            <button className="text-white font-bold bg-green-500 py-[10px] px-6 rounded-md my-2 ">
              Create New Account
            </button>
          </div>
          <p className="text-xs text-center">
            <span className="font-bold">Create a Page</span> for a celebrity,
            brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
