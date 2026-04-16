import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { FriendContext } from "../../context/FriendContext";

const Stats = () => {
  

      const { callList, smsList, videoList } = useContext(FriendContext);


  const data = [
    { name: "Call", value:callList.length, fill: "#244d3f" },
    { name: "Text", value: smsList.length, fill: "#7E22CE" },
    { name: "Video", value: videoList.length, fill: "#16A34A" },
  ];



  return (
    <div className="container mx-auto mt-20">
      {/* Title */}
      <h2 className="font-bold text-3xl mb-10 ">
        Friendship Analytics
      </h2>

      {/* Chart Box */}
      <div className="w-full h-[400px] bg-stone-100 shadow-2xl rounded-xl py-15">
        
        <h3 className="font-semibold ml-10 text-xl text-gray-600">
          By Interaction Type
        </h3>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={5}
              cornerRadius={10}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;