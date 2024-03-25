import React from "react";

export default function Card({
  name,
  number,
}: {
  name: string;
  number: string;
}) {
  return (
    <div className="border rounded-md absolute bg-white w-72 h-36 flex flex-col justify-end bg-gradient-to-br from-cyan-500 to-green-400">
      <div className="flex justify-center items-center h-full">
        <p>{number}</p>
      </div>
      <div className="p-2">
        <p>{name}</p>
      </div>
    </div>
  );
}
