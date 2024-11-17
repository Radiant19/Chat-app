// import React from "react";
// import {BsSend} from "react-icons/bs"

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full relative">
//         <input
//           type="text"
//           classname="border test-sm rounded-lg block w-full text-white  bg-white/5  border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"
//          placeholder="Send a Message"
//         />
//         <button type="submit" className="absolute inset-y-0 end-0 flex items-center px-3">
//             <BsSend/>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;

import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className='bg-sky-800 absolute inset-y-0 end-0 flex items-center px-3'>
					<BsSend  className="w-5 h-5" />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;