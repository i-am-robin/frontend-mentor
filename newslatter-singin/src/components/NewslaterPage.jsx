"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NewslaterPage() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("false");

  const router = useRouter();

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return !emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(isValidEmail(email));
  };

  const handleSubmit = () => {
    setError(isValidEmail(email));

    if (!error) {
      console.log("Success!");
      router.push("/success");
      return;
    }
    console.log("Fail!");
  };

  return (
    <div className="m-auto flex h-full w-full flex-col justify-between gap-4 bg-white mx-0 lg:mx-3 lg:h-fit lg:w-fit lg:flex-row-reverse lg:rounded-2xl lg:p-4 lg:shadow-xl">
      <div className="relative flex h-fit  w-full align-top lg:relative lg:flex-1 lg:align-middle">
        <Image
          className="h-full w-full lg:hidden"
          src={"/images/illustration-sign-up-mobile.svg"}
          height={300}
          width={300}
          alt="mobile-illustration"
        />
        <Image
          className="hidden h-full w-full lg:flex"
          src={"/images/illustration-sign-up-desktop.svg"}
          height={300}
          width={300}
          alt="mobile-illustration"
        />
      </div>

      <div className="flex flex-col gap-5 px-3 py-2 pb-16 lg:flex-1 lg:justify-center lg:px-10 lg:pb-0">
        <h1 className="text-grey-sleat-black text-4xl font-[700] lg:text-5xl">
          Stay updated!
        </h1>
        <p className="text-chorcol-grey font-[500]">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex flex-col gap-2">
          <IconList>Product discovery and building what matters</IconList>
          <IconList>Measuring to ensure updates are a success</IconList>
          <IconList>And much more!</IconList>
        </div>
        <div className="mt-1 flex flex-col gap-1">
          <div className="text-chorcol-grey flex justify-between text-xs">
            <label className=" font-[700]" htmlFor="">
              Email address
            </label>
            {error && (
              <span className=" text-prymary font-[700]">
                Valid email required
              </span>
            )}
          </div>
          <input
            type="email"
            onChange={handleEmailChange}
            placeholder="email@company.gmail"
            className={`border-grey text-grey-sleat-black rounded-md border-2 border-opacity-60
            px-4 py-2 outline-none ${
              error
                ? "bg-prymary border-prymary text-prymary bg-opacity-10"
                : ""
            }`}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-grey-sleat-black rounded-md from-[#FE5278] to-[#FD6B3B] py-3 text-sm font-[500] text-white text-opacity-80 shadow-lg outline-none transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:shadow-[#ff5c61de]"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
}

export default NewslaterPage;

export const IconList = ({ children }) => {
  return (
    <div className="flex items-start gap-3">
      <Image
        src={"/images/icon-list.svg"}
        width={20}
        height={20}
        alt="mobile-illustration"
      />
      <p className="text-chorcol-grey font-[400]">{children}</p>
    </div>
  );
};
