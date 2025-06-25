import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverButton from "../../common/HoverButton";


function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(null);

  const categories = ["Computer Science", "Data Science", "Business"];

  return (
    <nav className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <span
            onClick={() => navigate("/")}
            className="text-xl font-bold cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              [CC]
            </span>
            <span className="text-gray-900">Class Central</span>
          </span>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <HoverButton
              onHovered={(value) => setShowDropdown(value)}
              name="courses"
            >
              Courses
              {showDropdown && (
                <ul className="absolute left-0 top-full mt-1 w-56 bg-white border rounded-lg shadow-lg z-10 py-1">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </HoverButton>
            <HoverButton
              name="about"
              onClick={() => navigate("/about")}
            >
              About
            </HoverButton>
            <HoverButton onClick={() => navigate("/blog")}>
              Blog
            </HoverButton>

          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
