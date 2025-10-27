"use client";
import { useState, ReactNode } from "react";

interface Tab {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabSectionProps {
  tabs: Tab[];
}

export default function TabSection({ tabs }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <div className="flex gap-2 border-b border-zinc-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap px-6 py-3 font-medium transition-all ${
                activeTab === tab.key
                  ? "border-b-2 border-pink-400 text-pink-600"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white p-6 md:p-8">
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
}
