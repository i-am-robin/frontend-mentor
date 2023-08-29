import Image from "next/image";
import React from "react";

function SuccessPage() {
  return (
    <div className="bg-grey-sleat-black text-chorcol-grey flex h-screen w-screen items-center justify-center ">
      <div className="ld:h-fit flex h-full w-full flex-col gap-6 bg-white p-4 pt-40 shadow-2xl lg:h-fit lg:w-fit  lg:rounded-3xl lg:p-12 lg:pt-12">
        <Image src={"/images/icon-list.svg"} width={50} height={50} />
        <h1 className="text-chorcol-grey text-4xl font-[700] lg:text-5xl">
          Thanks for <br /> subscribing!
        </h1>
        <p className="text-chorcol-grey font-[500]">
          A confirmation email has been sent to <br />{" "}
          <span className="text-grey-sleat-black font-[900]">
            ash@loremcompany.com
          </span>
          . Please open it and click <br /> the button inside to confirm your
          subscription.
        </p>
        <button className="bg-grey-sleat-black mb-3 mt-auto w-full rounded-md from-[#FE5278] to-[#FD6B3B] py-3 text-sm font-[500] text-white text-opacity-80 shadow-lg outline-none transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:shadow-[#ff5c61de] lg:mb-0 lg:mt-0">
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
