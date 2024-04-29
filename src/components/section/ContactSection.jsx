'use client'
import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Please fill in all fields");
      return;
    }

    emailjs
      .send("service_w70or3x", "template_d6d5byu", {from_name: "Web Personal", user_email:email, message },{publicKey: 'cn59HlqiuCdFVNUf0',})
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Email sent successfully!");
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="w-full m-auto mb-40 text-center mt-36 sm:w-1/2">
      <h1 style={{ fontSize: "30px", fontWeight: "500", letterSpacing: "1px" }}>
        Contact Me
      </h1>
      <p style={{ fontWeight: "500" }} className="p-3 mt-2 konten sm:p-0">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:daffasven@gmail.com">
          daffasven@gmail.com
        </a>{" "}
        or through this form
      </p>
      <div className="flex w-5/6 m-auto mt-11">
        <form onSubmit={sendEmail} className="flex flex-col w-full">
          <input
            className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <textarea
            className="w-full h-40 px-4 py-2 mb-3 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          />
          <button className="flex items-center justify-center px-4 py-2 text-white bg-black rounded w-fit">
            Send
            <SiGmail className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
