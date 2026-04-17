import React, { useContext, useEffect, useState } from 'react'
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/FriendContext';
import { ClipLoader } from 'react-spinners';

const FriendDetails = () => {

  const { id } = useParams();
  const friends = useLoaderData();

  const expectedFriend = friends.find(
    friend => friend.id === Number(id)
  );

  const { handleCall, handleText, handleVideo } = useContext(FriendContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-12">
      <div className="max-w-6xl mx-auto bg-gray-200 p-10 rounded-xl">

        {(loading || !expectedFriend) ? (

          <div className="flex justify-center items-center h-64">
               <ClipLoader />
          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="space-y-4">

              <div className="bg-white rounded-xl shadow p-6 text-center">
                <img
                  src={expectedFriend.picture}
                  alt={expectedFriend.name}
                  className="w-24 h-24 rounded-full mx-auto p-2 border border-gray-200 bg-gray-100"
                />

                <h2 className="text-xl font-semibold mt-3">
                  {expectedFriend.name}
                </h2>

                <div className="mt-4">
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

                <p className="mt-2">"{expectedFriend.bio}"</p>

                <p className="mt-1 text-sm text-gray-600">
                  Preferred: {expectedFriend.email}
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow">
                  <RiNotificationSnoozeLine /> Snooze 2 weeks
                </button>

                <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow">
                  <FiArchive /> Archive
                </button>

                <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow text-red-500">
                  Delete
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">

              <div className="grid sm:grid-cols-3 gap-4 text-[#244D3F]">
                <div className="bg-white p-10 rounded-xl shadow text-center">
                  <h2 className="text-3xl font-bold">
                    {expectedFriend.days_since_contact}
                  </h2>
                  <p className="text-gray-500">Days Since Contact</p>
                </div>

                <div className="bg-white p-10 rounded-xl shadow text-center">
                  <h2 className="text-3xl font-bold">
                    {expectedFriend.goal}
                  </h2>
                  <p className="text-gray-500">Goal (Days)</p>
                </div>

                <div className="bg-white p-10 rounded-xl shadow text-center">
                  <h2 className="text-xl font-bold">
                    {expectedFriend.next_due_date}
                  </h2>
                  <p className="text-gray-500">Next Due</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">
                    Relationship Goal
                  </h3>
                  <p>
                    Connect every{" "}
                    <span className="font-bold text-xl">
                      {expectedFriend.goal} days
                    </span>
                  </p>
                </div>

                <button className="px-4 py-2 border bg-gray-200 rounded-lg font-bold">
                  Edit
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg mb-4">
                  Quick Check-In
                </h3>

                <div className="grid grid-cols-3 gap-4">

                  <button
                    className="p-6 border rounded-lg flex flex-col items-center gap-2 bg-gray-200 hover:bg-gray-50"
                    onClick={() => handleCall(expectedFriend)}
                  >
                    <MdOutlinePhoneInTalk className="text-4xl" />
                    <span className="font-bold">Call</span>
                  </button>

                  <button
                    className="p-6 border rounded-lg flex flex-col items-center gap-2 bg-gray-200 hover:bg-gray-50"
                    onClick={() => handleText(expectedFriend)}
                  >
                    <BsChatLeftTextFill className="text-4xl" />
                    <span className="font-bold">Text</span>
                  </button>

                  <button
                    className="p-6 border rounded-lg flex flex-col items-center gap-2 bg-gray-200 hover:bg-gray-50"
                    onClick={() => handleVideo(expectedFriend)}
                  >
                    <FaVideo className="text-4xl" />
                    <span className="font-bold">Video</span>
                  </button>

                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default FriendDetails;