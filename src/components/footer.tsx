import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { href: "#certificados", label: "Certificados" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#faqs", label: "FAQs" },
];

const socials = [
  { href: "#", label: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" },
  { href: "#", label: "Facebook", path: "M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" },
  { href: "#", label: "LinkedIn", path: "M6.5 9.5H3v12h3.5v-12zM4.75 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.2c0-2.7-1.5-4-3.5-4-1.6 0-2.3.9-2.7 1.5V9.5H11.3c0 .8 0 12 0 12H15v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V21.5H22.5V13.2z" },
  { href: "#", label: "YouTube", path: "M22.5 7.5s-.2-1.6-.8-2.3c-.8-.8-1.6-.8-2-.9C16.8 4 12 4 12 4s-4.8 0-7.7.3c-.4 0-1.2.1-2 .9-.6.7-.8 2.3-.8 2.3S1.3 9.4 1.3 11.2v1.6c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.3c.8.8 1.8.8 2.3.9 1.6.1 6.7.3 6.7.3s4.8 0 7.7-.3c.4 0 1.2-.1 2-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.6c0-1.8-.2-3.7-.2-3.7zM9.8 14.8V8.7l5.2 3.1-5.2 3z" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white text-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Barros & Albano"
            width={44}
            height={44}
            className="size-11 rounded-md object-cover"
          />
          <div>
            <p className="text-sm font-bold tracking-[0.12em]">BARROS & ALBANO</p>
            <p className="text-[10px] tracking-[0.16em] text-gold-dark uppercase">
              Certificados Digitais
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate">
          {footerNav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="hover:text-navy cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-navy/15 text-navy/55 hover:border-gold hover:text-gold-dark cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-navy/8 bg-blue">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate md:flex-row md:px-6">
          <p>© 2026 {site.name}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-navy cursor-pointer">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-navy cursor-pointer">
              Termos de Uso
            </a>
          </div>
          <p className="text-center text-[10px] font-semibold tracking-[0.1em] text-navy/70 uppercase md:text-right">
            Segurança para o seu hoje.
            <br className="hidden md:block" /> Confiança para o seu amanhã.
          </p>
        </div>
      </div>
    </footer>
  );
}
