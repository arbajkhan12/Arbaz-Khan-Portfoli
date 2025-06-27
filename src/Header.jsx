// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom"; 

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", to: "Home" },
//     { name: "About", to: "About" },
//     { name: "Projects", to: "Projects" },
//     { name: "Skills", to: "Skills" },
//     { name: "Contact", to: "Contact" },
//   ];

//   return (
//     <header className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         <h1 className="text-white text-2xl font-bold">Arbaz Khan</h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.to}
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="text-white hover:text-blue-500 cursor-pointer transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-gray-800 px-6 pb-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.to}
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               onClick={() => setIsOpen(false)}
//               className="block py-2 text-white hover:text-blue-400 cursor-pointer transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;


import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // <-- Correct import

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Projects", to: "Projects" },
    { name: "Skills", to: "Skills" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-white text-2xl font-bold">Arbaz Khan</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-blue-500 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-blue-400 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
