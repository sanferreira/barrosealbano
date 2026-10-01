export const site = {
  name: "Barros & Albano",
  tagline: "Certificados Digitais",
  description:
    "e-CPF e e-CNPJ com emissão rápida, segura e atendimento humano. Validade jurídica para notas fiscais, assinaturas e Receita Federal.",
  phoneDisplay: "+55 11 92672-1599",
  phoneTel: "+5511926721599",
  whatsapp: "5511926721599",
  whatsappUrl: "https://wa.me/5511926721599",
  emails: [
    "givanildoalbano@barrosalbano.com.br",
    "lenice@barrosalbano.com.br",
  ],
  address: null as string | null,
  hours: "Seg. a Sex. 8h às 18h",
  attendance: "Atendimento presencial e online",
} as const;

export const navLinks = [
  { href: "#certificados", label: "Certificados" },
  { href: "#certificados", label: "Renovação" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#faqs", label: "FAQs" },
] as const;

export const products = [
  {
    id: "ecpf-a1",
    name: "e-CPF A1",
    audience: "Pessoa Física",
    validity: "12 meses",
    href: `https://wa.me/5511926721599?text=${encodeURIComponent("Olá! Quero o e-CPF A1.")}`,
  },
  {
    id: "ecpf-a3",
    name: "e-CPF A3",
    audience: "Pessoa Física",
    validity: "Até 36 meses",
    href: `https://wa.me/5511926721599?text=${encodeURIComponent("Olá! Quero o e-CPF A3.")}`,
  },
  {
    id: "ecnpj-a1",
    name: "e-CNPJ A1",
    audience: "Empresas e MEI",
    validity: "12 meses",
    href: `https://wa.me/5511926721599?text=${encodeURIComponent("Olá! Quero o e-CNPJ A1.")}`,
  },
  {
    id: "ecnpj-a3",
    name: "e-CNPJ A3",
    audience: "Empresas e MEI",
    validity: "Até 36 meses",
    href: `https://wa.me/5511926721599?text=${encodeURIComponent("Olá! Quero o e-CNPJ A3.")}`,
  },
] as const;
