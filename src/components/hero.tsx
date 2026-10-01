"use client";

import { Float, HeroItem, HeroMotion } from "@/components/motion";
import { site } from "@/lib/site";
import {
  ArrowRight,
  Building2,
  Check,
  Handshake,
  Headphones,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const trusts = [
  { icon: ShieldCheck, label: "Processo seguro e confiável" },
  { icon: Zap, label: "Emissão rápida e sem burocracia" },
  { icon: Headphones, label: "Suporte especializado e humanizado" },
  { icon: Handshake, label: "Parceria com as principais ACs" },
];

const eCpfItems = ["Pessoa Física", "Emissão online", "Suporte completo"];
const eCnpjItems = [
  "Empresas e MEI",
  "Emissão rápida",
  "Atendimento especializado",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white text-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_80%_35%,rgba(26,54,93,0.08),transparent_60%),linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-8 md:px-6 md:pt-12 md:pb-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
          <HeroMotion>
            <HeroItem>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-dark uppercase">
                Certificação Digital
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="mt-3 max-w-[15ch] font-heading text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-navy sm:text-[2.75rem] lg:text-[3.05rem]">
                Seu certificado digital,{" "}
                <span className="text-gold-dark">sem complicação.</span>
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate">
                e-CPF e e-CNPJ com emissão rápida, segura e atendimento humano
                do início à instalação.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-light cursor-pointer"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Emitir agora
                  <ArrowRight className="size-4" aria-hidden />
                </motion.a>
                <motion.a
                  href="#certificados"
                  whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-navy/25 px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-gold-dark hover:text-gold-dark cursor-pointer"
                >
                  Ver certificados
                  <ArrowRight className="size-4" aria-hidden />
                </motion.a>
              </div>
            </HeroItem>
          </HeroMotion>

          <motion.div
            className="relative mx-auto w-full max-w-[540px]"
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[5/4]">
              <Float amplitude={6} duration={5.2} className="absolute inset-0">
                <div className="absolute inset-x-[18%] top-[2%] bottom-[16%] overflow-hidden rounded-t-[10px] border border-navy/15 bg-gradient-to-b from-navy-mid to-navy shadow-[0_24px_48px_rgba(26,54,93,0.22)]">
                  <div className="absolute inset-[6%] flex flex-col items-center justify-center rounded-sm bg-navy-deep ring-1 ring-gold/30">
                    <Image
                      src="/logo.jpg"
                      alt="Barros & Albano"
                      width={120}
                      height={120}
                      className="h-auto w-[38%] object-cover"
                      priority
                    />
                    <p className="mt-2 text-center text-[7px] font-semibold tracking-[0.14em] text-gold uppercase sm:text-[8px]">
                      Barros & Albano
                    </p>
                    <p className="mt-0.5 text-center text-[5px] tracking-[0.18em] text-gold/80 uppercase sm:text-[6px]">
                      Certificados Digitais
                    </p>
                    <p className="mt-2 max-w-[85%] text-center text-[5px] leading-tight tracking-[0.08em] text-white/55 uppercase sm:text-[6px]">
                      Segurança para o seu hoje.
                      <br />
                      Confiança para o seu amanhã.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-[12%] bottom-[11%] h-2.5 rounded-b-md bg-navy-mid" />
              </Float>

              <Float
                amplitude={10}
                duration={4.2}
                delay={0.3}
                className="absolute bottom-[4%] left-[8%] z-10 w-[36%]"
              >
                <div className="-rotate-[10deg] rounded-md border border-gold/40 bg-gradient-to-br from-navy to-navy-deep p-2.5 shadow-xl">
                  <div className="flex items-start justify-between">
                    <div className="size-4 rounded-[2px] bg-gradient-to-br from-gold-light to-gold-dark" />
                    <Image
                      src="/logo.jpg"
                      alt=""
                      width={28}
                      height={28}
                      className="size-5 rounded-sm object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[9px] font-semibold tracking-wide text-white/80">
                    e-CPF
                  </p>
                </div>
              </Float>

              <Float
                amplitude={9}
                duration={4.8}
                delay={0.6}
                className="absolute bottom-[5%] right-[10%] z-10 w-[30%]"
              >
                <div className="rotate-[8deg]">
                  <div className="mx-auto h-2.5 w-5 rounded-t-sm bg-navy-mid" />
                  <div className="rounded-md border border-white/15 bg-navy-deep px-2.5 py-3 text-center shadow-xl">
                    <Image
                      src="/logo.jpg"
                      alt=""
                      width={32}
                      height={32}
                      className="mx-auto size-5 rounded object-cover"
                    />
                    <p className="mt-1.5 text-[8px] font-semibold tracking-wide text-white/75">
                      e-CNPJ
                    </p>
                  </div>
                </div>
              </Float>

              <Float
                amplitude={7}
                duration={5.5}
                delay={0.15}
                className="absolute left-0 top-[6%] z-20 w-[48%] sm:w-[46%]"
              >
                <div className="rounded-2xl border border-navy/10 bg-white/95 p-3.5 shadow-[0_12px_36px_rgba(26,54,93,0.12)] backdrop-blur-md">
                  <div>
                    <div className="flex items-center gap-2 text-gold-dark">
                      <span className="inline-flex size-6 items-center justify-center rounded-full border border-gold/45">
                        <UserRound className="size-3.5" aria-hidden />
                      </span>
                      <span className="text-xs font-bold text-navy">e-CPF</span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {eCpfItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[10px] text-slate"
                        >
                          <Check className="size-3 shrink-0 text-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-3 h-px bg-navy/10" />
                  <div>
                    <div className="flex items-center gap-2 text-gold-dark">
                      <span className="inline-flex size-6 items-center justify-center rounded-full border border-gold/45">
                        <Building2 className="size-3.5" aria-hidden />
                      </span>
                      <span className="text-xs font-bold text-navy">e-CNPJ</span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {eCnpjItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[10px] text-slate"
                        >
                          <Check className="size-3 shrink-0 text-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Float>
            </div>
          </motion.div>
        </div>

        <HeroMotion className="mt-8 grid grid-cols-2 gap-4 border-t border-navy/10 pt-6 sm:grid-cols-4">
          {trusts.map((item) => (
            <HeroItem key={item.label}>
              <div className="flex items-start gap-2.5">
                <item.icon
                  className="mt-0.5 size-4 shrink-0 text-gold-dark"
                  aria-hidden
                />
                <span className="text-xs leading-snug text-slate sm:text-[13px]">
                  {item.label}
                </span>
              </div>
            </HeroItem>
          ))}
        </HeroMotion>
      </div>
    </section>
  );
}
