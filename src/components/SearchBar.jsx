// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// function SearchBar() {
//     const [city, setCity] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         if(city){
//             navigate(`/current.json/${city}`);
//             setCity('');
//         }
//       }
//   return (
//     <div>
//         <input
//         placeholder="Enter a city"
//         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         type="text"
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button>
//         {/* <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//           />
//         </svg> */}
//       </button>
//     </div>
//   )
// }

// export default SearchBar