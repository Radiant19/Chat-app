

// import React from 'react';
// import SearchInput from './SearchInput';
// import Conversations from './Conversations';
// import LogoutButton from './LogoutButton';

// const Sidebar = () => {
//   return (
//     <div className="w-80 h-screen bg-white/10 backdrop-blur-md border-r border-white/20 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider my-4 px-3 before:bg-white/10 after:bg-white/10"></div>
//       <Conversations />
//       <LogoutButton/>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-white/10 backdrop-blur-md border-r border-white/20 p-4 flex flex-col">
      <SearchInput />
      <div className="divider my-4 px-3 before:bg-white/10 after:bg-white/10"></div>
      {/* Add flex-1 to make Conversations take available space */}
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>
      {/* LogoutButton will now stick to the bottom */}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;