// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-gray-800 w-full fixed top-0 left-0 text-white">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex items-center px-2 lg:px-0 xl:w-1/2">
//             <div className="flex-shrink-0 items-">
//               <Link to="/" className="text-2xl font-bold text-white">
//                 FunType
//               </Link>
//             </div>
//             <div className="hidden md:block md:ml-10 ">
//               <Link className="ml:10 px-3 py-2 rounded-md text-sm font-medium text-white" to="/">
//                 Home
//               </Link>
//               <Link className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white" to="/profile">
//                 Profile
//               </Link>
//               <Link className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white" to="/login">
//                 Login/Signup
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 w-full fixed top-0 left-0 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              FunType
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={handleMenuToggle}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:w-auto`}
          >
            <div className="md:flex-grow">
              <Link
                className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-300"
                to="/profile"
              >
                Profile
              </Link>
              <Link
                className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-300"
                to="/login"
              >
                Login/Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

