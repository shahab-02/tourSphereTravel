import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQItems({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
     <div className="mt-8 px-8 md:px-14 font-montserrat">
    <div className="border rounded-md p-4 border-gray-400">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-sm sm:text-md md:text-xl font-bold text-black">{question}</span>
        <span className="text-xl text-[#CFCFCF]">
          {open ? <FaMinus className="text-[#3D3D3D]"/> : <FaPlus className="text-[#3D3D3D]" />}
        </span>
      </button>

      {/* Answer */}
      {open && (
        <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg">
          {answer}
        </p>
      )}
    </div>
    </div>
  );
}

export default FAQItems;
