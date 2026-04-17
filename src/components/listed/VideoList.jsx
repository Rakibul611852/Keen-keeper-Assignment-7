import React, { useContext } from 'react'
import { FaVideo } from 'react-icons/fa';
import { FriendContext } from '../../context/FriendContext';

 const VideoList = () => {
  const {videoList } = useContext(FriendContext);
  console.log(videoList, "friendContext");


  return (
    <div className='container mx-auto'>
      {
          <div className="">
      {videoList?.map((friend) => (
            <div className=" shadow-2xl border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3 hover:bg-gray-200 transition duration-200">

      <div className="flex items-center gap-5">
        
        <div className="rounded-full border border-gray-200 p-2 flex items-center justify-center">
         <button className=" hover:text-green-500 text-3xl transition">
        <FaVideo />
      </button>
        </div>

        <div>
          <h3>
            <span className="font-semibold text-xl">Video</span> <span className='text-gray-600'>with {friend.name}</span>
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
export default VideoList;