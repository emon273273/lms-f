import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = ["Computer Science", "Data Science", "Business"];

  //function handle

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className="bg-gray-300  border-b  shadow-sm  ">
      {/* Logo and otherr */}
      <div className=" mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 gap-4">
          <span className="text-xl font-bold text-gray-800">
            <span className="text-blue-400">[CC]</span>
            Class Central
          </span>

          {/* course */}
          <div className="hidden md:flex space-x-4 relative">
            <Button
              variant="outline"
              onClick={() => setShowDropdown(handleShowDropdown)}
              className="text-gray-600 hover:text-gray-900"
            >
              Courses
            </Button>
            {showDropdown && (
              <ul className="absolute left-0 mt-12 w-48 bg-white border rounded-md shadow-lg z-10">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <span className="text-gray-600">or</span>
          <Button size="sm" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
