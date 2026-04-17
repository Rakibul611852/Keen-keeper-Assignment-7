import React, { useContext } from 'react';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { FriendContext } from '../../context/FriendContext';

const CallList = () => {
  const { callList, textList, videoList } = useContext(FriendContext);
  console.log(callList, textList, videoList, "friendContext");


  return (
    <div className='container mx-auto'>
      {
          <div className="">
      {callList?.map((friend) => (
            <div className=" shadow-2xl border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3 hover:bg-gray-200 transition duration-200">

      <div className="flex items-center gap-5">

        <div className="rounded-full border border-gray-200 p-2 flex items-center justify-center">
         <button className=" hover:text-green-500 text-3xl transition">
        <MdOutlinePhoneInTalk />
      </button>
        </div>

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

    </div>

      ))}
    </div>
      }
    </div>
  );
};

export default CallList;