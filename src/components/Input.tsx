import React from "react";

export default function Input({
  onNameChange,
  onNumberChange,
  onSecurityChange,
}) {
  const inputStyles = "rounded-md w-64 h-8 border border-solid border-gray-500";

  return (
    <form className="flex flex-col items-center w-9/12">
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="name" className="mb-2">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className={inputStyles}
          onChange={onNameChange}
        />
      </div>
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="number" className="mb-2">
          CARD NUMBER
        </label>
        <input
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
          maxLength={19} // Maximum length including spaces
          className={inputStyles}
          onChange={onNumberChange}
        />
      </div>
      <div className="flex flex-row items-center mb-4">
        <div className="flex flex-col">
          <label htmlFor="expMonth" className="mb-2">
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
            onChange={onSecurityChange}
          />
        </div>
      </div>

      <button>Confirm</button>
    </form>
  );
}
