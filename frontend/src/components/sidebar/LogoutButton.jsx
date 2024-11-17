
// // import useLogout from "../../hooks/useLogout";

// const LogoutButton = () => {
// 	// const { loading, logout } = useLogout();

// 	return (
// 		<div className='mt-auto'>
			
// 				
		
// 		</div>
// 	);
// };
// export default LogoutButton;

import React from 'react';
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <button 
      className="mt-auto flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;