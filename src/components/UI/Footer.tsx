import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com/gandib-gyanangkur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a
            href="https://x.com/gandibroy11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/gandib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/gandib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-500" />
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/blogs" className="hover:text-gray-400">
            Blogs
          </a>
          <a href="/projects" className="hover:text-gray-400">
            Projects
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
