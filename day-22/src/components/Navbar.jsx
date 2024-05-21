const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 text-white bg-purple-700 sm:bg-red-700 md:bg-amber-600 xl:bg-blue-700 2xl:bg-slate-700">
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        className="rounded-full w-14"
      />
      <ul className="flex gap-[2rem]">
        <li className="font-bold cursor-pointer">Home</li>
        <li className="font-bold cursor-pointer">About US</li>
        <li className="font-bold cursor-pointer">Catalogue</li>
        <li className="font-bold cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
