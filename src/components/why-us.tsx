"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "+5.000",
    label: "certificados emitidos",
    icon: Users,
  },
  {
    value: "+10 anos",
    label: "de experiência",
    icon: CalendarDays,
  },
  {
    value: "4,9/5",
    label: "avaliação dos clientes",
    icon: Star,
  },
];

export function WhyUs() {
  const reduce = useReducedMotion();

  return (
    <section id="sobre" className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.85fr_1.1fr] lg:items-stretch">
          <Reveal className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Confiança que gera resultados
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy md:text-[2.25rem]">
              Por que a Barros & Albano?
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              Mais que certificados, entregamos tranquilidade. Atendimento
              próximo, solução rápida e suporte em todas as etapas.
            </p>
            <motion.a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-light cursor-pointer"
            >
              <MessageCircle className="size-4" aria-hidden />
              Falar com um especialista
              <ArrowRight className="size-4" aria-hidden />
            </motion.a>
          </Reveal>

          <Stagger className="flex flex-col gap-3" fast>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-2xl border border-navy/6 bg-blue px-5 py-4">
                  <stat.icon
                    className="size-5 text-gold-dark"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="mt-2 font-heading text-2xl font-semibold text-navy">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-navy/6 bg-blue p-7 md:p-8">
              <div>
                <Quote className="size-7 text-navy/20" aria-hidden />
                <blockquote className="mt-3 font-heading text-lg italic leading-relaxed text-navy/85 md:text-xl">
                  “Atendimento excelente, me ajudaram em todas as etapas e o
                  processo foi muito rápido!”
                </blockquote>
                <div
                  className="mt-4 flex gap-1 text-gold"
                  aria-label="5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
              </div>
              <figcaption className="mt-6 border-t border-navy/10 pt-4 text-sm text-slate">
                Cliente verificado · e-CPF A1
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
