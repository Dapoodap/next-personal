'use client'
import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    // if (!email || !message) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    // emailjs
    //   .send("service_w70or3x", "template_d6d5byu", {from_name: "Web Personal", user_email:email, message },{publicKey: 'cn59HlqiuCdFVNUf0',})
    //   .then(
    //     (response) => {
    //       console.log("Email sent successfully!", response);
    //       alert("Email sent successfully!");
    //       setEmail('')
    //       setMessage('')
    //     },
    //     (error) => {
    //       console.error("Failed to send email:", error);
    //       alert("Failed to send email. Please try again later.");
    //     }
    //   );
  };

  return (
    <div id="contact" style={{ height:'100vh',width:'100vw' }} className="flex items-center justify-center m-auto mb-40 text-center mt-36 sm:w-1/2">
      <div className="h-fit">
      <motion.h1
      initial={{ 
        opacity:0,
        x:-100
       }}
       whileInView={{ 
        opacity:1,
        x:0
        }}
        transition={{ 
          duration:1
         }} 
      style={{ fontSize: "30px", fontWeight: "500", letterSpacing: "1px" }}>
        Contact Me
      </motion.h1>
      <motion.p
      initial={{ 
        opacity:0,
        x:-100
       }}
       whileInView={{ 
        opacity:1,
        x:0
        }}
        transition={{ 
          duration:1,
          delay:0.3
         }} 
      style={{ fontWeight: "500" }} className="p-3 mt-2 konten sm:p-0">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:daffasven@gmail.com">
          daffasven@gmail.com
        </a>{" "}
        or through this form
      </motion.p>
      <motion.div
      initial={{ 
        opacity:0,
        x:-100
       }}
       whileInView={{ 
        opacity:1,
        x:0
        }}
        transition={{ 
          type:'spring'
         }} 
      className="flex w-5/6 m-auto mt-11">
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
          <motion.button
          whileHover={{ 
            scale:1.05,
            backgroundColor:'green'
           }}
           whileTap={{ 
            rotate:'5deg',
            scale:1.08,
            
            }}
            transition={{ 
              duration:0.2
             }} 
          className="flex items-center justify-center px-4 py-2 text-white bg-black rounded w-fit">
            Send
            <SiGmail className="ml-2" />
          </motion.button>
        </form>
      </motion.div>
      </div>
    </div>
  );
}

export default ContactSection;
