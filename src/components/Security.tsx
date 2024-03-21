import React from "react";

export default function Security({ cvv }: { cvv: string }) {
  return (
    <div className="border flex flex-col rounded-md absolute bg-white w-72 h-36 top-64 ">
      <div className="flex flex-col">
        <br />
        <p className="h-9 w-62 bg-black"></p>
      </div>
      <div className="flex flex-grow justify-end items-end pr-4 pb-4">
        <p>{cvv}</p>
      </div>
    </div>
  );
}
