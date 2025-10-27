"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";

type Props = {
  src: string;
  title: string;
  price?: string;
};

export default function ProductCard({ src, title, price }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
        <div className="relative w-full overflow-hidden bg-zinc-50">
          <Image src={src} alt={title} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="flex items-center justify-between p-3">
          <div>
            <p className="text-sm font-medium">{title}</p>
            {price && <p className="text-xs text-zinc-500">{price}</p>}
          </div>
          <button onClick={() => setOpen(true)} className="rounded-full bg-black px-3 py-1 text-xs text-white transition hover:bg-zinc-800">
            Ver
          </button>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title={title}>
        <div className="relative mx-auto w-full max-w-3xl bg-white">
          <Image src={src} alt={title} width={0} height={0} sizes="90vw" style={{ width: "100%", height: "auto" }} />
        </div>
      </Modal>
    </>
  );
}
