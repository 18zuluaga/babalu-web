"use client";
import { ReactNode } from "react";

interface InfoBoxProps {
  title: string;
  items: string[];
  color?: string;
  icon?: ReactNode;
}

export default function InfoBox({ title, items, color = "border-l-pink-300", icon }: InfoBoxProps) {
  return (
    <div className={`rounded-lg border-l-4 ${color} bg-zinc-50 p-5`}>
      <div className="mb-3 flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        <h3 className="text-base font-semibold text-zinc-800">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-zinc-700">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
