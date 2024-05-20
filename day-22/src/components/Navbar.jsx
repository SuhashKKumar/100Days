const Navbar = () => {
  return (
    <nav className="px-4 py-6 bg-slate-700 text-white flex justify-between items-center">
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        className="w-14 rounded-full"
      />
      <ul className="flex gap-5 ">
        <li className="mx-2 cursor-pointer">Home</li>
        <li className="mx-2 cursor-pointer ">About US</li>
        <li className="mx-2 cursor-pointer ">Catalogue</li>
        <li className="mx-2 cursor-pointer ">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
