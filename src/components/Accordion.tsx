"use client";
import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  color?: string;
}

export default function Accordion({ title, children, defaultOpen = false, color = "border-pink-200 bg-pink-50" }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`overflow-hidden rounded-xl border transition-all ${color}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-opacity-80"
      >
        <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
        <span className={`text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white p-5">
          <div className="prose prose-sm prose-zinc max-w-none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

