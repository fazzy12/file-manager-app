/* eslint-disable no-unused-vars */
import React from "react";
import { stepsData } from "../assets/assets";

function Steps() {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-grey-600 mb-8">
        Transform Words Into Stunning Images
      </p>
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4  p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg"
          >
            <img width={40} src={step.icon} alt="step icon" />
            <div>
              <h2 className="font-medium text-xl">{step.title}</h2>
              <p className="text-grey-5 00">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
