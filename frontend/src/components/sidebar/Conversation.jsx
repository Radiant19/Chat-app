// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//       <div className="avatar online">
//         <div>
//           <img
//             src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//             alt="user avatar"
//           />
//         </div>
//       </div>

//       <div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>John Doe</p>
//  						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
//     </div>
//     <div className='divider my-0 py-0 h-1' />
//     </>
//   );
// };

// export default Conversation;

import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-1.5 items-center hover:bg-white/10 rounded-lg p-1.5 py-2 cursor-pointer transition-all duration-200">
        <div className="relative">
          <img
            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
             							
							
            alt="user avatar"
            className="w-9 h-9 rounded-full"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-gray-900"></div>
        </div>
        
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex gap-2 justify-between items-center">
            <p className="font-semibold text-gray-200 text-sm truncate">John Doe</p>
            <span className="text-lg">🎃</span>
          </div>
        </div>
      </div>
      
      <div className="divider my-0 py-0 h-px before:bg-white/10 after:bg-white/10" />
    </>
  );
};

export default Conversation;
