"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  ArrowRight,
  FileCheck2,
  MonitorPlay,
  ShieldCheck,
  Upload,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Escolha",
    description: "Selecione seu e-CPF ou e-CNPJ.",
    icon: FileCheck2,
  },
  {
    n: "02",
    title: "Envie",
    description: "Receba a lista e envie seus documentos.",
    icon: Upload,
  },
  {
    n: "03",
    title: "Valide",
    description: "Faça sua videoconferência com nossa equipe.",
    icon: MonitorPlay,
  },
  {
    n: "04",
    title: "Emita",
    description: "Receba seu certificado e conte com nosso suporte.",
    icon: ShieldCheck,
  },
];

export function Steps() {
  return (
    <section id="como-funciona" className="bg-blue py-14 text-navy md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Passo a passo
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-[2.25rem]">
              Do pedido ao seu certificado em 4 passos
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
              Um processo simples, transparente e acompanhado pela nossa
              equipe.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {steps.map((step, index) => (
              <StaggerItem key={step.n}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-white">
                      {step.n}
                    </span>
                    <step.icon
                      className="size-4 text-navy/60"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    {index < steps.length - 1 && (
                      <div
                        className="ml-auto hidden flex-1 items-center lg:flex"
                        aria-hidden
                      >
                        <div className="h-px flex-1 border-t border-dashed border-navy/20" />
                        <ArrowRight className="mx-0.5 size-3 text-navy/25" />
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
