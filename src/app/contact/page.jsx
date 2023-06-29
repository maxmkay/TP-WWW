"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const email = `The following message was sent from the Top Prop contact form:%0A%0AFirst Name: ${firstName}%0ALast Name: ${lastName}%0APhone Number: ${phoneNumber}%0A%0AMessage:%0A${message}%0A%0A`;

    window.open(`mailto:topprop23@gmail.com?subject=${subject}&body=${email}`);
  };

  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex w-full h-full items-center px-12 py-8 flex-wrap xl:!flex-nowrap justify-center gap-8 xl:gap-24 grow">
        <div className="max-w-[48rem] flex flex-col gap-8 xl:h-96">
          <h1 className="font-bold text-[#02A4ff] flex gap-2 sm:gap-8 items-center">
            Contact Us
            <Image
              src={"/logo.png"}
              alt="logo"
              className="w-12 h-12 rounded"
              width="48"
              height={48}
            />
          </h1>
          <p className="text-lg text-gray-500 max-w-[90%]">
            Have a question about our Extension?<br></br>
            Want to get in touch with Top Prop?<br></br>
            <br></br>
            Submit the form with your inquiry or email us directly at{" "}
            <a href="mailto:topprop23@gmail.com">topprop23@gmail.com</a> and we
            will reply as quickly as possible
          </p>
        </div>
        <div className="flex flex-col gap-4 shadow-lg rounded-lg p-8">
          <div className="flex gap-4 flex-wrap xl:!flex-nowrap">
            <label className="flex flex-col font-bold gap-1 grow">
              First Name
              <input
                value={firstName}
                className="p-2.5 bg-gray-100 rounded focus:bg-sky-50 duration-200 outline-none font-normal"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
            </label>
            <label className="flex flex-col font-bold gap-1 grow">
              Last Name
              <input
                value={lastName}
                className="p-2.5 bg-gray-100 rounded focus:bg-sky-50 duration-200 outline-none font-normal"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              ></input>
            </label>
          </div>
          <div className="flex gap-4 flex-wrap xl:!flex-nowrap">
            <label className="flex flex-col font-bold gap-1 grow">
              Subject
              <input
                className="p-2.5 bg-gray-100 rounded focus:bg-sky-50 duration-200 outline-none font-normal"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              ></input>
            </label>
            <label className="flex flex-col font-bold gap-1 grow">
              Phone Number
              <input
                className="p-2.5 bg-gray-100 rounded focus:bg-sky-50 duration-200 outline-none font-normal"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              ></input>
            </label>
          </div>
          <div className="w-full">
            <label className="flex flex-col font-bold gap-1">
              Message
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="w-full bg-gray-100 max-h-48 min-h-[5rem] outline-none p-2.5 rounded font-normal focus:bg-sky-50 duration-200"
                maxLength={500}
              ></textarea>
            </label>
          </div>
          <button
            className="w-full bg-[#02A4ff] p-2 rounded text-white font-bold text-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-col flex-sm-row">
            <div className="col-auto">
              <p className="small m-0">Copyright &copy; Your Website 2023</p>
            </div>
            <div className="col-auto">
              <Link href="/" className="small">
                Home
              </Link>
              <span className="mx-1">&middot;</span>
              <Link href="/privacy" className="small">
                Privacy
              </Link>
              <span className="mx-1">&middot;</span>
              <Link href="/terms" className="small">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
