"use client";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl md:p-8">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-bold text-zinc-800">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-2xl text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
        <div className="prose prose-zinc max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

