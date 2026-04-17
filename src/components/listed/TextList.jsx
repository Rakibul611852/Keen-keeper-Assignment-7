import React, { useContext } from 'react'
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FriendContext } from '../../context/FriendContext';

const TextList = () => {

const {textList,} = useContext(FriendContext);
  console.log(textList,"friendContext");

  return (
     <div className='container mx-auto'>
          {
              <div className="">
              {textList?.map((friend) => (
            <div className=" shadow-2xl border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3 hover:bg-gray-200 transition duration-200">

              <div className="flex items-center gap-10">

                <div className=" rounded-full border border-gray-200 flex items-center justify-center p-2">
                  <button className="text-3xl transition">
                      <BsChatLeftTextFill />
                  </button>
                </div>
        

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

            
            </div>
    
          ))}
        </div>
          }
        </div>
  )
}
export default TextList;