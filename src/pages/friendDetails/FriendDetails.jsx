import React, { use } from 'react'
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

// const friendsPromise = fetch("/friends.json").then((res) => res.json());


const FriendDetails = () => {

    const {id} = useParams();
    console.log(id,"id");

    // const friends = use(friendsPromise);
    // console.log(friends, "friends")

    const friends = useLoaderData();
    console.log(friends, "friends")
    const expectedFriend = friends.find(friend=>friend.id == id)
    console.log(expectedFriend, "expectedFriend")

  return   <div className= "mt-12 ">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 bg-gray-200 p-10 rounded-xl">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="w-25 h-25 rounded-full mx-auto p-2 border border-gray-200 bg-gray-100" 
            />

            <h2 className="text-xl font-semibold mt-3">
              {expectedFriend.name}
            </h2>

            {/* Status */}
            <div className="mt-4 text-center">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                expectedFriend.status === "overdue"
                  ? "bg-red-600 text-white"
                  : expectedFriend.status === "needs attention"
                  ? "bg-orange-400 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {expectedFriend.status === "overdue"
                ? "Overdue"
                : expectedFriend.status === "needs attention"
                ? "Needs Attention"
                : "On Track"}
            </span>
          </div>
             
             {/* Tags */}
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {expectedFriend.tag.map((tag, ind) => (
              <div
                key={ind}
                className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </div>
            ))}
          </div>

           {/* Bio */}
          <p className="text-sm text-gray-600 text-center mt-2">
           " {expectedFriend.bio}"
          </p>

            {/* Email */}
          <p className="text-sm text-gray-500 text-center">
           Preferred : {expectedFriend.email}
          </p>
   
          </div>

           <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow">
               <RiNotificationSnoozeLine />Snooze 2 weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow">
                <FiArchive />  Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow text-red-500">
             Delete
            </button>
          </div>

        </div>   
        
       {/* Right section */}
        <div className="lg:col-span-2 space-y-6">

          {/* Top Stats */}
          <div className="grid sm:grid-cols-3 gap-4 text-[#244D3F]">
            <div className="bg-white p-6 rounded-xl shadow text-center space-y-2">
              <h2 className="text-3xl font-bold">
                {expectedFriend.days_since_contact}
              </h2>
              <p className="text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center space-y-2">
              <h2 className="text-3xl font-bold">
                {expectedFriend.goal}
              </h2>
              <p className="text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center space-y-2">
              <h2 className="text-2xl font-bold">
                {expectedFriend.next_due_date}
              </h2>
              <p className="text-gray-500">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
            <div className='space-y-3'>
              <h3 className="font-semibold text-lg">
                Relationship Goal
              </h3>
              <p className="">
                Connect every <span className="font-bold text-xl">{expectedFriend.goal} days</span>
              </p>
            </div>

            <button className="px-4 py-2 border  border-gray-200 bg-gray-200 hover:bg-gray-50 rounded-lg text-md font-bold">
              Edit
            </button>
          </div>

           {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="p-6 border border-gray-200 rounded-lg flex flex-col items-center gap-2 bg-gray-200 hover:bg-gray-50">
                <span className='text-4xl font-bold'><MdOutlinePhoneInTalk/></span><span className='text-xl font-bold'>Call</span>
              </button>

              <button className="p-6 border border-gray-200 rounded-lg flex flex-col items-center gap-2 bg-gray-200 hover:bg-gray-50">
               <span className='text-4xl font-bold'><BsChatLeftTextFill /></span> <span className='text-xl font-bold'>Text</span>
              </button>

              <button className="p-6 border border-gray-200 rounded-lg flex flex-col items-center gap-2 bg-gray-200 hover:bg-gray-50">
                <span className='text-4xl font-bold'><FaVideo /></span><span className='text-xl font-bold'>Video</span>
              </button> 

            </div>
            </div>
          
        
          </div>
      </div>
      </div>
      

}
export default FriendDetails;