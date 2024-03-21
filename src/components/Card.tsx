import React from "react";

export default function Card({ name, number }) {
  return (
    <div className="absolute bg-white w-64 h-32">
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}
