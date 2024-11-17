// import React from 'react'
// import {IoSearchSharp} from "react-icons/io5"
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input className='input input-boadered rounded-full' placeholder="Search..." type="text"/>
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//             <IoSearchSharp className="w-6 h-6 outline-none "/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput

import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input 
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
      />
      <button 
        type="submit" 
        className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-transparent"
      >
        <IoSearchSharp className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
