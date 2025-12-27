import React from "react";
import Input from "./input";
import Button from "./Button";
import { useState } from "react";

export default function DonationForm() {
  const [frequency, setFrequency] = useState("One-time");
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-2 sm:px-4 md:px-0">
      <div className="flex gap-2 sm:gap-4 flex-wrap justify-center mb-4">
        <SuggestedAmountButton amount={500} onClick={() => setAmount(500)} />
        <SuggestedAmountButton amount={1000} onClick={() => setAmount(1000)} />
        <SuggestedAmountButton amount={5000} onClick={() => setAmount(5000)} />
        <SuggestedAmountButton
          amount={10000}
          onClick={() => setAmount(10000)}
        />
      </div>
      <form action="" className="w-full max-w-md mx-auto">
        <Input
          label="Enter amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="flex gap-2 my-4">
          <Input
            type="radio"
            name="choice"
            label="One-time"
            id="donation-frequency-onetime"
            checked={frequency === "One-time"}
            onChange={() => setFrequency("One-time")}
          />
          <Input
            type="radio"
            name="choice"
            label="Monthly"
            id="donation-frequency-monthly"
            checked={frequency === "Monthly"}
            onChange={() => setFrequency("Monthly")}
          />
        </div>
        <Input
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          textArea
          label="Message (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=""
        />
        <Button type="submit" className="mt-6 w-full">
          Donate Now
        </Button>
      </form>
    </div>
  );
}

function SuggestedAmountButton({ amount, onClick }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-white border border-[#009688] text-[#009688] font-clash text-base sm:text-lg font-semibold px-4 py-2 rounded-[5px] shadow-sm hover:bg-[#009688] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 cursor-pointer focus:ring-[#009688] focus:ring-offset-2"
      onClick={typeof onClick === "function" ? onClick : undefined}
    >
      <span className="">₦</span>
      <span>{amount.toLocaleString()}</span>
    </button>
  );
}
