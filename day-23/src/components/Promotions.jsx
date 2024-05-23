const Promotions = () => {
  return (
    <div className="promotions-container flex flex-wrap gap-6 p-6 justify-center my-6 ">
      <div className="promo flex flex-col items-center gap-2 ">
        <img src="/assets/microsoft-bw-icon.svg" className="w-8" alt="Microsoft 365" />
        <p className="font-semibold text-sm text-blue-800 underline underline-offset-2">Choose your Microsoft 365</p>
      </div>
      <div className="promo flex flex-col items-center gap-2 ">
        <img src="/assets/xbox-bw-icon.svg" className="w-8" alt="Xbox" />
        <p className="font-semibold text-sm text-blue-800 underline underline-offset-2">Shop Xbox</p>
      </div>
      <div className="promo flex flex-col items-center gap-2 ">
        <img src="/assets/microsoft-bw-icon.svg" className="w-8" alt=" Windows 11" />
        <p className="font-semibold text-sm text-blue-800 underline underline-offset-2">Get Windows 11</p>
      </div>
      <div className="promo flex flex-col items-center gap-2 ">
        <img src="/assets/laptop-bw-icon.svg" className="w-8" alt="New Surface Laptop" />
        <p className="font-semibold text-sm text-blue-800 underline underline-offset-2">Explore Surface devices </p>
      </div>
    </div>
  );
};

export default Promotions;
