import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("John Doe");
  const [number, setNumber] = useState("000000000");
  return (
    <div className="flex flex-row">
      <div className="w-3/12 flex h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <p>Fast and Secure Payments</p>
      </div>
      <Input
        onNameChange={(e) => setName(e.target.value)}
        onNumberChange={(e) => setNumber(e.target.value)}
      />
      <Card name={name} number={number} />
    </div>
  );
}

export default App;
