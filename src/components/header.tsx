"use client";

import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, MessageCircle, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue text-[11px] font-medium text-navy/85">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-1.5 sm:justify-between md:px-6">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-navy cursor-pointer"
          >
            WhatsApp: {site.phoneDisplay}
          </a>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
            {site.attendance}
          </span>
          <span className="hidden md:inline">{site.hours}</span>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-navy/8 bg-white text-navy",
          scrolled && "shadow-md shadow-navy/8",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="Barros & Albano"
              width={40}
              height={40}
              className="size-9 rounded-md object-cover"
              priority
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-[12px] font-bold tracking-[0.12em] text-navy">
                BARROS & ALBANO
              </span>
              <span className="block text-[9px] tracking-[0.16em] text-gold-dark uppercase">
                Certificados Digitais
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="text-[13px] font-semibold text-navy transition-colors duration-200 hover:text-gold-dark cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Buscar"
              className="hidden size-9 items-center justify-center text-navy/55 hover:text-navy md:inline-flex cursor-pointer"
            >
              <Search className="size-4" />
            </button>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-light cursor-pointer"
            >
              <MessageCircle className="size-4" aria-hidden />
              Fale conosco
            </a>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md border border-navy/15 text-navy xl:hidden cursor-pointer"
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-navy/8 px-4 py-3 xl:hidden">
            {navLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}-m`}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy hover:bg-blue cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
