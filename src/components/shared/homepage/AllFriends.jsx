import React, { use } from "react";
import FriendCard from "../../ui/FriendCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);

  return (
    <div className="mt-20 container mx-auto">

      <h2 className="text-3xl font-bold mb-6">Your Friends</h2>

      {/* GRID ONLY ONCE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {friends.map((friend,ind) =>{
         
        return <FriendCard key={ind}  friend={friend}/>
        
        })}
      </div>
    </div>
  );
};

export default AllFriends;