import React, { useContext } from 'react';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { FriendContext } from '../../context/FriendContext';

const CallList = () => {
  const { callList, smsList, videoList } = useContext(FriendContext);
  console.log(callList, smsList, videoList, "friendContext");

  return (
    <div className='container mx-auto mt-20'>
      {
          <div className="">
      {callList?.map((friend) => (
            <div className=" shadow-2xl border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3 hover:bg-gray-200 transition duration-200">
      
      {/* Left Content */}
      <div className="flex items-center gap-5">
        
        {/* Avatar */}
        <div className="rounded-full border border-gray-200 p-2 flex items-center justify-center">
         <button className=" hover:text-green-500 text-3xl transition">
        <MdOutlinePhoneInTalk />
      </button>
        </div>

        {/* Text */}
        <div>
          <h3>
            <span className="font-semibold text-xl">Call</span> <span className='text-gray-600'>with {friend.name}</span>
          </h3>
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Call Icon */}
     
    </div>

      ))}
    </div>
      }
    </div>
  );
};

export default CallList;