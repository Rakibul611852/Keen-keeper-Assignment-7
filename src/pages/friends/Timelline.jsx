import React, { useContext, useState } from 'react'
import { FriendContext } from '../../context/FriendContext';

import CallList from '../../components/listed/CallList';
import TextList from '../../components/listed/TextList';
import VideoList from '../../components/listed/VideoList';
import { MdOutlineNotInterested } from 'react-icons/md';

const Timeline = () => {
  const { callList, smsList, videoList } = useContext(FriendContext);
  const [filter, setFilter] = useState("all");

  // 🔥 check if data exists
  const isEmpty =
    (filter === "call" && callList.length === 0) ||
    (filter === "text" && smsList.length === 0) ||
    (filter === "video" && videoList.length === 0) ||
    (filter === "all" &&
      callList.length === 0 &&
      smsList.length === 0 &&
      videoList.length === 0);

  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold mt-20 mb-6'>
        Timeline
      </h2>

      {/* Dropdown */}
      <div>
        <select
          className='border border-gray-300 w-[30%] p-4 rounded-lg text-lg font-semibold mb-6'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* ❗ No Data Message */}
      {isEmpty && (
        <div className='h-[40vh] bg-gray-100 flex items-center justify-center'>
          <h2 className='font-bold text-3xl flex items-center gap-3'>
             <span> <MdOutlineNotInterested /></span> 
             <span>No data found for this filter</span>
          </h2>
        </div>
      )}

      {/* 📌 Lists */}
      {!isEmpty && (
        <>
          {(filter === "all" || filter === "call") && (
            <CallList data={callList} />
          )}

          {(filter === "all" || filter === "text") && (
            <TextList data={smsList} />
          )}

          {(filter === "all" || filter === "video") && (
            <VideoList data={videoList} />
          )}
        </>
      )}
    </div>
  );
};

export default Timeline;