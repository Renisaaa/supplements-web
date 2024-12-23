import { AccordionType } from "@/shared/types";
import { useState } from "react";

export default function Accordion({ title, answer }: AccordionType) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full  bg-black border-1  border-secondary-500 p-3   "
      >
        <span className="text-primary-100">{title}</span>

        <svg
          className="fill-primary-100 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm  bg-slate-50 mb-2 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden p-3">{answer}</div>
      </div>
    </div>
  );
}
