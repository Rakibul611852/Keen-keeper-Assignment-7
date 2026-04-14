import React from "react";

const FriendCard = ({friend}) => {
  return(
      <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
    
          {/* Profile Image */}
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-200"
          />

          {/* Name */}
          <h2 className="text-xl font-bold mt-4 text-center">
            {friend.name}
          </h2>

          {/* Email */}
          <p className="text-sm text-gray-500 text-center">
            {friend.email}
          </p>

          {/* Bio */}
          <p className="text-sm text-gray-600 text-center mt-2">
            {friend.bio}
          </p>

          {/* Days Since Contact */}
          <p className="text-gray-500 text-sm text-center mt-2">
            {friend.days_since_contact} days ago
          </p>

          {/* Tags */}
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {friend.tag.map((tag, ind) => (
              <div
                key={ind}
                className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Next Due Date */}
          <p className="text-xs text-gray-500 text-center mt-3">
            Next Due: {friend.next_due_date}
          </p>

          {/* Status */}
          <div className="mt-4 text-center">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                friend.status === "overdue"
                  ? "bg-red-600 text-white"
                  : friend.status === "needs attention"
                  ? "bg-orange-400 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {friend.status === "overdue"
                ? "Overdue"
                : friend.status === "needs attention"
                ? "Needs Attention"
                : "On Track"}
            </span>
          </div>

        </div>

        );
};

export default FriendCard;