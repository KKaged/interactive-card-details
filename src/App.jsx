import Input from "./components/Input";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Security from "./components/Security";

function App() {
  const [name, setName] = useState("John Doe");
  const [number, setNumber] = useState("0000 0000 0000 0000"); // Initialize with spaces
  const [cvv, setCvv] = useState("000");

  const handleNumberChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    input = input.replace(/(.{4})/g, "$1 ").trim(); // Insert a space after every 4 characters
    setNumber(input);
  };

  return (
    <div className="flex flex-row">
      <div className="w-3/12 flex h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <p>Fast and Secure Payments</p>
      </div>
      <Input
        onNameChange={(e) => setName(e.target.value)}
        onNumberChange={handleNumberChange} // Pass the custom handler for card number change
        onSecurityChange={(e) => setCvv(e.target.value)}
      />
      <Card name={name} number={number} />
      <Security cvv={cvv} />
    </div>
  );
}

export default App;
