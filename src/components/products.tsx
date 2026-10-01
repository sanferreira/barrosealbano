"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { products } from "@/lib/site";
import { ArrowRight, Building2, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Products() {
  const reduce = useReducedMotion();

  return (
    <section id="certificados" className="bg-blue py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Certificados Digitais
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy md:text-[2.25rem]">
              Encontre o certificado ideal
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate md:text-[15px]">
              Soluções para pessoas físicas, empresas e MEI. Escolha o tipo e
              comece agora.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#certificados"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:text-gold-dark hover:underline cursor-pointer"
            >
              Ver todos os certificados
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const isPf = product.name.includes("e-CPF");
            const Icon = isPf ? UserRound : Building2;

            return (
              <StaggerItem key={product.id}>
                <motion.article
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -6, boxShadow: "0 16px 40px rgba(26,54,93,0.12)" }
                  }
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="flex h-full flex-col rounded-2xl border border-navy/8 bg-white p-5 shadow-[0_6px_24px_rgba(26,54,93,0.06)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-full border border-gold/50 text-gold-dark">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{product.audience}</p>
                  <p className="mt-3 text-sm text-slate/80">{product.validity}</p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-light cursor-pointer"
                  >
                    Comprar agora
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
