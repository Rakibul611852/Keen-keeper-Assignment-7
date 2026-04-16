import React, { useContext, useState } from 'react'
import { FriendContext } from '../../context/FriendContext';

import CallList from '../../components/listed/CallList';
import TextList from '../../components/listed/TextList';
import VideoList from '../../components/listed/VideoList';

const Timeline = () => {
  const { callList, smsList, videoList } = useContext(FriendContext);

  const [filter, setFilter] = useState("all");

  return (
    <div className='container mx-auto'>
      
      <h2 className='text-3xl font-bold mt-20 mb-6'>
        Timeline
      </h2>

      {/* 🔽 Dropdown Filter */}
      <div className='mb-4'>
        <select
          className='border border-gray-300 w-60 p-4 rounded-lg text-lg font-semibold'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all" >Filter timeline</option>
          <option value="call" >Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* 📌 Conditional Rendering */}
      <div>

        {(filter === "all" || filter === "call") && (
          <div>
            <CallList data={callList} />
          </div>
        )}

        {(filter === "all" || filter === "text") && (
          <div>
            <TextList data={smsList} />
          </div>
        )}

        {(filter === "all" || filter === "video") && (
          <div>
            <VideoList data={videoList} />
          </div>
        )}

      </div>

    </div>
  )
}

export default Timeline;