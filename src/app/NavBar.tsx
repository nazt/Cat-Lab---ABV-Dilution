const NavBar: React.FC = () => {
    return (
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo placeholder: Replace with your logo */}
          <div className="h-8 w-8 bg-blue-500 mr-2 rounded-full flex justify-center items-center">
            <span className="text-white font-semibold">L</span>
          </div>
          <span className="text-white text-lg font-bold">ABV Calculator</span>
        </div>
        {/* Navigation links */}
        <div className="flex">
          <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          {/* Add other navigation links if needed */}
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  