import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/*  Logo */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold">eLearning</h1>
          </div>

          {/*  Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
            </ul>
          </nav>

          {/*  Social Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
        </div>

        {/* Credits */}
        <hr className="my-4 border-gray-600" />
        <div className="text-center">
          <p className="text-sm">&copy; 2024 eLearning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
