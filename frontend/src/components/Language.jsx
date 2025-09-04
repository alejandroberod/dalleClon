import React from "react";

import { colombia, unitedStates } from "../assets";

export default function Language({ lng, isSelected, onClick }) {
  const classButton = `relative cursor-pointer w-fit rounded-full ${
    isSelected ? "border-[#6469ff] border-2" : ""
  }`;

  return (
    <button type="button" className={classButton} onClick={onClick}>
      <img
        src={lng === "es" ? colombia : unitedStates}
        alt="Idioma"
        className="h-auto object-cover w-10"
      />
      {isSelected && (
        <div className="absolute inset-0 z-0 bg-[rgba(100,105,255,0.5)] rounded-full"></div>
      )}
    </button>
  );
}
