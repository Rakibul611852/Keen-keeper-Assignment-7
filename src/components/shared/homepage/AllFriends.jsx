import React, { useEffect, useState } from "react";
import FriendCard from "../../ui/FriendCard";
import { ClipLoader} from "react-spinners";

const AllFriends = () => {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-20 container mx-auto">

      <h2 className="text-3xl font-bold mb-6">Your Friends</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend, ind) => (
            <FriendCard key={ind} friend={friend} />
          ))}
        </div>
      )}

    </div>
  );
};

export default AllFriends;