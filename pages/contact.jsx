import React from "react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Email: ${email}, Message: ${message}`);
    // code to send form data to backend or email
  };
  return (
    <div className="lg:max-w-7xl lg:mx-auto mt-20 px-3">
      <h1 className="text-4xl">LET&#39;S TALK</h1>
      <div className="border flex flex-col items-center justify-center">
        <div className="w-96 h-96 bg-white"/>
        <div className="w-fit ring">
          <h1 className="lg:text-lg">Please send me your thought</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 p-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="lg:w-96 w-full h-8 bg-purple-900 bg-opacity-50 p-3 outline-none rounded focus:ring-2 ring-purple-600"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              className="lg:w-96 w-full h-36 bg-purple-900 bg-opacity-50 p-3 outline-none rounded focus:ring-2 ring-purple-600"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-purple-900 bg-opacity-50 mx-auto lg:mx-0 w-fit py-1 px-7 rounded-full hover:bg-opacity-100"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
