"use client";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function FeatureCard({ icon, title, description, color = "bg-pink-100" }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg">
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30 blur-2xl transition-all group-hover:scale-110 ${color}`} />
      <div className="relative">
        {icon && (
          <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
            {icon}
          </div>
        )}
        <h3 className="mb-2 text-lg font-semibold text-zinc-800">{title}</h3>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
