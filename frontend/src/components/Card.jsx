import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

export default function Card({ _id, name, prompt, photo }) {
  return (
    <div
      className="
    rounded-xl
    group
    relative
    shadow-[0_0_1px_0_rgba(189,192,207,0.06),_0_10px_16px_-1px_rgba(189,192,207,0.2)]
    hover:shadow-[0_0_1px_0_rgba(189,192,207,0.06),_0_10px_16px_-1px_rgba(189,192,207,0.4)]
    card
  "
    >
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-hidden prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-red-400 flex justify-center items-center text-white text-xs">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)} className=" bg-transparent outline-none">
            <img src={download} alt="download" className="w-6 h-6 object-contain invert cursor-pointer"/>
          </button>
        </div>
      </div>
    </div>
  );
}
