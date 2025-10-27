"use client";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  color?: string;
}

export default function TimelineItem({ title, description, icon, color = "bg-pink-200" }: TimelineItemProps) {
  return (
    <div className="group flex gap-4">
      <div className="relative flex flex-col items-center">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${color} text-zinc-700 transition-transform group-hover:scale-110`}>
          {icon}
        </div>
        <div className="h-full w-0.5 bg-gradient-to-b from-zinc-200 to-transparent" />
      </div>
      <div className="flex-1 pb-8">
        <h3 className="mb-1 text-lg font-semibold text-zinc-800">{title}</h3>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
