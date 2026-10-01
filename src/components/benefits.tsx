"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ArrowRight, Headphones, Laptop, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção e autenticidade para suas operações.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Processo simples, com orientação em cada etapa.",
  },
  {
    icon: Headphones,
    title: "Atendimento humano",
    description: "Fale com nossa equipe sempre que precisar.",
  },
  {
    icon: Laptop,
    title: "100% digital",
    description: "Validação online, sem precisar sair de casa.",
  },
];

export function Benefits() {
  return (
    <section id="empresas" className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Benefícios
            </p>
            <h2 className="mt-2 max-w-lg font-heading text-3xl font-semibold tracking-tight text-navy md:text-[2.25rem]">
              Tudo o que você precisa para sua vida digital
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="#sobre"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:text-gold-dark hover:underline cursor-pointer"
            >
              Por que escolher a Barros & Albano?
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex flex-col items-start">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue text-gold-dark shadow-[0_4px_14px_rgba(26,54,93,0.06)]">
                  <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
