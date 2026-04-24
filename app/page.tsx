"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  PenLine,
  Target,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.452 20.452h-3.555v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.25 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.061 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.25-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.061-2.633-.336-3.608-1.311-.975-.975-1.25-2.242-1.311-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.25 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.602.402 3.635 1.369 2.668 2.336 2.396 3.509 2.338 4.786 2.28 6.066 2.266 6.475 2.266 12s.014 5.934.072 7.214c.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.24 3.417 1.297C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.45-.33 3.417-1.297.967-.967 1.24-2.14 1.297-3.417.058-1.28.072-1.689.072-7.214s-.014-5.934-.072-7.214c-.058-1.277-.33-2.45-1.297-3.417C19.398.402 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const especialidadesMarketing = [
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "Funil de Conversão",
  "Copy para Anúncios",
  "Otimização de ROI",
];

const stats = [
  { valor: 4, sufixo: "+", label: "Anos em marketing digital" },
  { valor: 50, sufixo: "+", label: "Campanhas gerenciadas" },
  { valor: 2, sufixo: "MM+", prefixo: "R$ ", label: "Verba gerenciada em mídia" },
  { valor: 2, sufixo: "", label: "Plataformas: Meta + Google" },
];

const servicos = [
  {
    icone: Target,
    titulo: "Gestão de Tráfego Pago",
    descricao:
      "Planejamento, execução e acompanhamento de campanhas em Meta Ads e Google Ads com foco em consistência operacional e análise de desempenho.",
    itens: [
      "Planejamento de canal e funil",
      "Segmentação de público e criativos",
      "Otimização contínua orientada a dados",
    ],
    cor: "primary" as const,
  },
  {
    icone: PenLine,
    titulo: "Copy & Funil de Conversão",
    descricao:
      "Desenvolvimento de mensagens para diferentes etapas do funil, alinhando tom de voz, proposta e contexto de audiência.",
    itens: [
      "Copy para anúncios e landing pages",
      "Estrutura de funil por consciência",
      "Testes A/B de oferta e criativo",
    ],
    cor: "secondary" as const,
  },
  {
    icone: BarChart3,
    titulo: "Diagnóstico de Crescimento",
    descricao:
      "Leitura de indicadores de aquisição e conversão para identificar pontos de melhoria e orientar decisões de otimização.",
    itens: [
      "Auditoria de campanhas e contas",
      "Leitura de métricas-chave",
      "Plano de testes e escala",
    ],
    cor: "primary" as const,
  },
];

const metodo = [
  {
    numero: "01",
    titulo: "Imersão no negócio",
    descricao:
      "Entendimento profundo da oferta, público-alvo, ticket médio e metas de crescimento antes de qualquer campanha.",
  },
  {
    numero: "02",
    titulo: "Estratégia de aquisição",
    descricao:
      "Definição de canal, proposta e mensagem por etapa do funil, conectando investimento a decisões de compra.",
  },
  {
    numero: "03",
    titulo: "Execução com testes",
    descricao:
      "Ativação de campanhas, criativos e copy com rotina de testes semanais para validar o que converte de verdade.",
  },
  {
    numero: "04",
    titulo: "Otimização contínua",
    descricao:
      "Acompanhamento de métricas, ajustes recorrentes e documentação dos aprendizados ao longo do ciclo das campanhas.",
  },
];

const whatsappLink =
  "https://wa.me/5598991709660?text=Olá%20Carlos%2C%20vi%20seu%20portfólio%20e%20quero%20falar%20sobre%20um%20projeto.";
const linkedinLink = "https://www.linkedin.com/in/carlos-eduardo-lago-405168222/";
const profileImageSrc =
  "https://raw.githubusercontent.com/CarlosEduardoLago/portf-lio/master/public/profile.jpg";

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const listStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none -mx-4 sm:-mx-6 md:-mx-8 ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 120"
        className="h-14 w-full sm:h-20"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path
          d="M0,64 C240,110 480,10 720,50 C960,90 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
}

function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_12px_30px_rgba(16,185,129,0.45)] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-emerald-400/70 animate-pulse-ring"
      />
      <MessageCircle className="relative size-6" strokeWidth={2.25} />
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,107,53,0.14),transparent_38%),radial-gradient(circle_at_88%_0%,rgba(74,144,226,0.14),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(123,104,238,0.18),transparent_45%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 glass">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Avatar className="size-9 ring-1 ring-[#FF6B35]/40">
              <AvatarImage src={profileImageSrc} alt="Carlos Eduardo Lago" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold tracking-tight text-slate-100">
              Carlos Eduardo Lago
            </span>
          </motion.div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="transition-colors duration-300 hover:text-[#FF6B35]">
              Sobre
            </a>
            <a href="#servicos" className="transition-colors duration-300 hover:text-[#FF6B35]">
              Serviços
            </a>
            <a href="#metodo" className="transition-colors duration-300 hover:text-[#FF6B35]">
              Método
            </a>
            <a href="#contato" className="transition-colors duration-300 hover:text-[#FF6B35]">
              Contato
            </a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-primary btn-shimmer hidden h-10 px-4 text-sm sm:inline-flex"
          >
            Contato
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.section
          id="hero"
          variants={sectionReveal}
          initial="hidden"
          animate="show"
          className="relative grid gap-10 py-14 sm:py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {especialidadesMarketing.slice(0, 4).map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-200 sm:text-xs"
                >
                  {item}
                </Badge>
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl leading-[1.05] font-bold tracking-[-0.02em] sm:text-5xl md:text-6xl"
            >
              Gestão de tráfego e{" "}
              <span className="text-gradient-primary">copywriting</span> com
              abordagem estratégica.
            </motion.h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              Sou <strong className="text-slate-100">Carlos Eduardo Lago</strong>,
              gestor de tráfego e copywriter. Minha atuação integra estratégia,
              mídia e comunicação com foco em contexto de negócio, funil e
              métricas de desempenho.
            </p>
            <motion.div
              className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="portfolio-btn portfolio-btn-primary btn-shimmer w-full sm:w-auto"
              >
                Entrar em contato
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="portfolio-btn portfolio-btn-secondary w-full sm:w-auto"
              >
                Ver LinkedIn
              </a>
            </motion.div>

            <div className="mt-10 hidden items-center gap-2 text-xs text-slate-400 lg:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-2 rounded-full bg-emerald-400 animate-pulse-ring" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Aberto a oportunidades profissionais
            </div>
          </div>

          <motion.div
            className="relative mx-auto flex max-w-sm items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.35),transparent_60%)] blur-2xl"
            />
            <div className="relative animate-float">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full border border-[#FF6B35]/40 animate-pulse-ring"
              />
              <Avatar className="size-56 ring-4 ring-[#FF6B35]/30 shadow-[0_0_60px_rgba(255,107,53,0.35)] sm:size-64 md:size-72">
                <AvatarImage
                  src={profileImageSrc}
                  alt="Foto de Carlos Eduardo Lago"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl">CL</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <a
            href="#sobre"
            aria-label="Rolar para a próxima seção"
            className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 lg:flex"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="size-5 animate-scroll-down" aria-hidden />
          </a>
        </motion.section>

        <WaveDivider />

        <motion.section
          id="sobre"
          className="py-14 sm:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF6B35]">
              Sobre mim
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Marketing digital com <span className="text-gradient-primary">visão integrada</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              className="relative mx-auto w-full max-w-sm rounded-3xl border border-white/10 glass p-6 card-glow-secondary"
              variants={itemReveal}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <Avatar className="size-28 ring-2 ring-cyan-300/40 shadow-[0_0_40px_rgba(74,144,226,0.35)]">
                  <AvatarImage src={profileImageSrc} alt="Carlos Eduardo Lago" className="object-cover" />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold text-white">Carlos Eduardo Lago</p>
                  <p className="text-sm text-slate-300">Gestor de Tráfego & Copywriter</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {especialidadesMarketing.map((item) => (
                    <Badge
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[0.7rem] font-medium text-cyan-100"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="size-3.5" aria-hidden />
                  São Luís, MA
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={itemReveal}>
              <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                Atuo em marketing digital com integração entre{" "}
                <strong className="text-white">gestão de tráfego</strong> e{" "}
                <strong className="text-white">copywriting</strong>. Essa
                combinação orienta meu trabalho desde o entendimento do negócio
                até a estruturação das campanhas.
              </p>
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                Minha base inclui comportamento do consumidor, estratégia de
                marca, funil e métricas. Com essa perspectiva, analiso campanhas
                dentro de um contexto mais amplo e conduzo ajustes de forma
                contínua a partir de dados.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-sm sm:p-5"
                  >
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                      <span className="text-gradient-primary">
                        <AnimatedCounter
                          to={item.valor}
                          prefix={item.prefixo ?? ""}
                          suffix={item.sufixo}
                        />
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="servicos"
          className="py-14 sm:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF6B35]">
              Atuação
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Frentes de <span className="text-gradient-primary">atuação profissional</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Escopo de trabalho estruturado em planejamento, execução e análise
              contínua de campanhas e mensagens.
            </p>
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicos.map((item) => {
              const Icon = item.icone;
              const glowClass =
                item.cor === "primary"
                  ? "card-glow-primary"
                  : "card-glow-secondary";
              const iconBg =
                item.cor === "primary"
                  ? "bg-[linear-gradient(135deg,#FF6B35_0%,#F7931E_100%)]"
                  : "bg-[linear-gradient(135deg,#4A90E2_0%,#7B68EE_100%)]";
              return (
                <motion.article
                  key={item.titulo}
                  variants={itemReveal}
                  className={`glass group flex h-full flex-col rounded-3xl p-6 sm:p-7 ${glowClass}`}
                >
                  <div
                    className={`mb-5 inline-flex size-12 items-center justify-center rounded-2xl ${iconBg} text-white shadow-lg`}
                  >
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.descricao}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-200">
                    {item.itens.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span
                          aria-hidden
                          className={`mt-2 size-1.5 shrink-0 rounded-full ${
                            item.cor === "primary"
                              ? "bg-[#FF6B35]"
                              : "bg-cyan-300"
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.section>

        <WaveDivider flip />

        <motion.section
          id="metodo"
          className="py-14 sm:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF6B35]">
              Método
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Forma de trabalho <span className="text-gradient-primary">estruturada</span>
            </h2>
          </div>

          <motion.ol
            className="relative grid gap-5 md:grid-cols-2"
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {metodo.map((item) => (
              <motion.li
                key={item.numero}
                variants={itemReveal}
                className="relative flex gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B35]/40 sm:p-6"
              >
                <span
                  className="text-gradient-primary text-3xl font-bold leading-none sm:text-4xl"
                  aria-hidden
                >
                  {item.numero}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.descricao}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </motion.section>

        <motion.section
          id="contato"
          className="py-14 sm:py-20"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF6B35]">
              Contato
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Vamos nos conectar{" "}
              <span className="text-gradient-primary">profissionalmente?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Disponível para conversas sobre projetos, oportunidades e trocas
              profissionais em marketing digital.
            </p>
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              variants={itemReveal}
              className="glass card-glow-primary group flex flex-col items-center gap-3 rounded-3xl p-6 text-center"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#FF6B35_0%,#F7931E_100%)] text-white shadow-lg">
                <MessageCircle className="size-6" aria-hidden />
              </span>
              <h3 className="text-base font-semibold text-white sm:text-lg">WhatsApp</h3>
              <p className="text-sm text-slate-300">Contato profissional</p>
              <span className="mt-1 text-xs font-medium text-[#FF6B35] group-hover:underline">
                Abrir conversa
              </span>
            </motion.a>

            <motion.a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              variants={itemReveal}
              className="glass card-glow-secondary group flex flex-col items-center gap-3 rounded-3xl p-6 text-center"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#4A90E2_0%,#7B68EE_100%)] text-white shadow-lg">
                <LinkedinIcon className="size-6" />
              </span>
              <h3 className="text-base font-semibold text-white sm:text-lg">LinkedIn</h3>
              <p className="text-sm text-slate-300">Conecte-se comigo</p>
              <span className="mt-1 text-xs font-medium text-cyan-300 group-hover:underline">
                Ver perfil
              </span>
            </motion.a>

            <motion.div
              variants={itemReveal}
              className="glass flex flex-col items-center gap-3 rounded-3xl p-6 text-center"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner">
                <MapPin className="size-6" aria-hidden />
              </span>
              <h3 className="text-base font-semibold text-white sm:text-lg">Localização</h3>
              <p className="text-sm text-slate-300">São Luís, MA</p>
              <p className="text-xs text-slate-400">Atendimento 100% online</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-white/10 glass-strong p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left"
            variants={itemReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Disponível para novos desafios profissionais
              </h3>
              <p className="mt-1 text-sm text-slate-300 sm:text-base">
                Se fizer sentido para você, podemos conversar sobre contexto,
                objetivos e possibilidades de atuação.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="portfolio-btn portfolio-btn-primary btn-shimmer w-full sm:w-auto"
            >
              Entrar em contato
            </a>
          </motion.div>
        </motion.section>

        <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-xs text-slate-400 sm:flex-row">
          <p>(c) {new Date().getFullYear()} Carlos Eduardo Lago. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[#FF6B35]"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-[#FF6B35]"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={`mailto:contato@example.com`}
              aria-label="E-mail"
              className="transition-colors hover:text-[#FF6B35]"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </footer>
      </main>

      <FloatingWhatsApp />
    </div>
  );
}
