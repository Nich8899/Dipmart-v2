import React, {useState} from "react";
import Link from "next/link";


function Navbar() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <nav className="fixedNav">
      <div className="w-full flex justify-between items-center shadow-sm px-3 bg-white ">
        <img
          src="https://www.dipmarts.com/wp-content/themes/dipmarts/assets/images/DiPMarts-Horizontal-Logo.png"
          alt=""
          className="w-[90px] h-[60px] object-contain"
        />
        <div className="flex space-x-3">
         <button>
         <Link href="/Search">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
          
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
           
          </svg>
          </Link>
         </button>
        <Link href="/Alert">
         <button>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 fill-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"
            />
          </svg>
          <span className="absolute top-3 text-white rounded-full text-xs bg-red-500  h-4 w-4">
            {count}
          </span>
         </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
