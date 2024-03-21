import React from "react";

export default function Input({ onNameChange, onNumberChange }) {
  const inputStyles =
    " rounded-md w-64 h-8 border border-solid border-gray-500";
  return (
    <form className="flex flex-col items-center w-9/12">
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="name" className="mb-2">
          CARDHOLDER NAME
        </label>
        <input type="text" className={inputStyles} onChange={onNameChange} />
      </div>
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="name" className="mb-2">
          CARD NUMBER
        </label>
        <input
          type="number"
          maxLength={16}
          minLength={0}
          className={inputStyles}
          onChange={onNumberChange}
        />
      </div>
      <div className="flex flex-row items-center mb-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            EXP DATE (MM/YY)
          </label>
          <div className="flex">
            <input
              type="number"
              maxLength={2}
              className="h-8 rounded-md w-16 border border-solid border-gray-500"
              placeholder="MM"
            />
            <input
              type="number"
              maxLength={2}
              className="h-8 rounded-md w-16 border border-solid border-gray-500 ml-2"
              placeholder="YY"
            />
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <label htmlFor="cvc" className="mb-2 w-32">
            CVC
          </label>
          <input
            type="number"
            maxLength={3}
            className="h-8 rounded-md w-32 border border-solid border-gray-500"
          />
        </div>
      </div>

      <button>Confirm</button>
    </form>
  );
}
