"use client";

interface StatCardProps {
  number: string;
  label: string;
  color?: string;
}

export default function StatCard({ number, label, color = "text-pink-400" }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="relative">
        <div className={`mb-2 text-4xl font-bold ${color}`}>
          {number}
        </div>
        <p className="text-sm font-medium text-zinc-600">{label}</p>
      </div>
    </div>
  );
}
