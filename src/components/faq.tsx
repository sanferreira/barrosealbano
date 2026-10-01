"use client";

import { Accordion, type FaqItem } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const faqs: FaqItem[] = [
  {
    question: "Qual certificado eu preciso?",
    answer:
      "Pessoa física usa e-CPF. Empresas e MEI usam e-CNPJ. O modelo A1 fica no computador (12 meses) e o A3 em token/cartão (até 36 meses).",
  },
  {
    question: "Preciso de certificado para emitir notas fiscais?",
    answer:
      "Sim. O Certificado Digital é obrigatório para emissão de NF-e e para acesso a diversos sistemas fiscais e tributários.",
  },
  {
    question: "Como funciona a validação por videochamada?",
    answer:
      "É um processo rápido e seguro. Nossa equipe confere documentos e identidade durante a chamada, sem necessidade de deslocamento.",
  },
  {
    question: "Quanto tempo leva para emitir?",
    answer:
      "Após a validação, a emissão costuma ocorrer em até 24 horas. Para urgências, consulte nossa equipe.",
  },
];

export function Faq() {
  const reduce = useReducedMotion();

  return (
    <section id="faqs" className="bg-blue py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.25fr_0.95fr] lg:items-start">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy md:text-[2.25rem]">
              Ainda ficou com alguma dúvida?
            </h2>
            <a
              href="#faqs"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:border-gold hover:text-gold-dark cursor-pointer"
            >
              Ver todas as perguntas
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <Accordion items={faqs} />
          </Reveal>

          <Reveal delay={0.14}>
            <motion.aside
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative overflow-hidden rounded-2xl bg-navy p-7 text-white md:p-8"
            >
              <MessageCircle
                className="pointer-events-none absolute -right-4 -bottom-4 size-36 text-white/[0.06]"
                aria-hidden
              />
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                Fale conosco
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug">
                Nossa equipe está pronta para te ajudar
              </h3>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-light cursor-pointer"
              >
                Conversar no WhatsApp
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </motion.aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
