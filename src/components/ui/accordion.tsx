"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-navy/10 overflow-hidden rounded-xl border border-navy/10 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors duration-200 hover:bg-surface"
            >
              <span className="font-heading text-sm font-semibold text-navy md:text-[15px]">
                {item.question}
              </span>
              <Plus
                className={cn(
                  "size-4 shrink-0 text-gold-dark transition-transform duration-200",
                  isOpen && "rotate-45",
                )}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-sm leading-relaxed text-slate">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
