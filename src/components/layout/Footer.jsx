import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">About LMS</h3>
            <p className="text-gray-200 text-sm">
              Empowering learners worldwide with quality education through our
              innovative learning platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/" className="hover:text-blue-200 transition-colors">
                Home
              </a>
              <a
                href="/about"
                className="hover:text-blue-200 transition-colors"
              >
                About
              </a>
              <a
                href="#courses"
                className="hover:text-blue-200 transition-colors"
              >
                Courses
              </a>
              <a
                href="#instructors"
                className="hover:text-blue-200 transition-colors"
              >
                Instructors
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@lms.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneCall size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-1 text-sm rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 flex-grow"
              />
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-3 py-1 h-auto text-sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-gray-200 text-sm">
          <p>© {new Date().getFullYear()} LMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
