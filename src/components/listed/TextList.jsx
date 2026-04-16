import React, { useContext } from 'react'
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FriendContext } from '../../context/FriendContext';

const TextList = () => {

const { callList, smsList, videoList } = useContext(FriendContext);
  console.log(callList, smsList, videoList, "friendContext");

  return (
     <div className='container mx-auto mt-20'>
          {
              <div className="">
              {smsList?.map((friend) => (
                    <div className=" shadow-2xl border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3 hover:bg-gray-200 transition duration-200">
              
              {/* Left Content */}
              <div className="flex items-center gap-10">
                
                {/* Avatar */}
                <div className=" rounded-full border border-gray-200 flex items-center justify-center p-2">
                <button className="text-3xl transition">
                <BsChatLeftTextFill />
              </button>
                </div>
        
                {/* Text */}
                <div>
                  <h3 className="text-gray-800 font-medium mb-2">
                    <span className="font-semibold">Text</span> with {friend.name}
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
  )
}
export default TextList;