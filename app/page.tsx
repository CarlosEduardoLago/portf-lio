"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const competenciasPorBloco = [
  {
    titulo: "Mídia paga",
    itens: ["Meta Ads", "Google Ads", "Planejamento de campanhas", "Gestão de verba"],
  },
  {
    titulo: "Estratégia e copy",
    itens: ["Copywriting", "Funil de vendas", "Mensagens para cada etapa", "Criativos orientados à conversão"],
  },
  {
    titulo: "Análise e otimização",
    itens: ["Google Analytics", "Leitura de métricas", "Testes A/B", "Otimização contínua"],
  },
];

const diferenciaisProfissionais = [
  "Atuação combinando estratégia de negócio, mídia e copy para aumentar a consistência dos resultados.",
  "Diagnóstico inicial focado em oferta, público e etapa do funil antes de escalar investimento.",
  "Rotina de acompanhamento com análise de performance, identificação de gargalos e ajustes de campanha.",
  "Comunicação clara com foco em decisão: o que manter, o que pausar e o que testar em seguida.",
];

const experiencias = [
  {
    empresa: "712 Propaganda",
    cargo: "Gestor de Tráfego Pago | Performance & Growth",
    periodo: "jan/2026 - atual",
    descricao:
      "Gerencio campanhas no Meta Ads e Google Ads com foco em resultado, não só em entrega de relatório. Cuido de todo o processo: briefing, estratégia de funil, criação de copy, segmentação de público e otimização contínua com base em dados. Copy e gestão de tráfego integrados desde o início, dentro de uma visão de marketing digital mais ampla. Cada campanha começa com uma pergunta simples: o que esse cliente precisa oferecer e para quem.",
  },
  {
    empresa: "CVC Viagens",
    cargo: "Analista de marketing digital",
    periodo: "jul/2022 - dez/2025",
    descricao:
      "Atuei no monitoramento analítico de campanhas e no acompanhamento de métricas-chave para alinhar a presença digital aos objetivos de negócio. Trabalhei na otimização de campanhas para ampliar tráfego qualificado e ROI, transformando dados brutos em insights acionáveis para tomada de decisão. Também desenvolvi e refinei mensagens para redes sociais, anúncios pagos, e-mails e landing pages, ajustando tom de voz e conteúdo para elevar engajamento e conversão.",
  },
];

const formacao = [
  {
    instituicao: "Descomplica",
    curso: "Graduação em Marketing Digital",
    periodo: "2024 - 2025",
    descricao:
      "Formação com base em estratégia, posicionamento, conteúdo, canais de aquisição, análise de dados, relacionamento com público e construção de presença digital orientada a resultado.",
  },
];

const especialidadesMarketing = [
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "Funil de Conversão",
  "Copy para Anúncios",
  "Otimização de ROI",
];

const pilaresPerformance = [
  {
    titulo: "Estratégia de aquisição",
    descricao: "Definição de canal, oferta e mensagem por etapa do funil para gerar tráfego qualificado.",
  },
  {
    titulo: "Operação orientada por dados",
    descricao: "Rotina de análise de métricas para otimizar investimento e priorizar ações de maior impacto.",
  },
  {
    titulo: "Criativo + copy integrados",
    descricao: "Alinhamento entre posicionamento da marca, linguagem e objetivo da campanha para aumentar conversão.",
  },
];

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

export default function Home() {
  const profileImageSrc =
    "https://raw.githubusercontent.com/CarlosEduardoLago/portf-lio/master/public/profile.jpg";
  const whatsappLink =
    "https://wa.me/5598991709660?text=Olá%20Carlos%2C%20vi%20seu%20portfólio%20e%20quero%20falar%20sobre%20um%20projeto.";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.18),transparent_42%)]" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Avatar className="size-9 ring-1 ring-white/20">
              <AvatarImage src={profileImageSrc} alt="Carlos Eduardo Lago" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold tracking-tight text-slate-100">
              Carlos Eduardo Lago
            </span>
          </motion.div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#sobre" className="transition-colors duration-300 hover:text-emerald-200">
              Sobre
            </a>
            <a href="#experiencia" className="transition-colors duration-300 hover:text-emerald-200">
              Experiência
            </a>
            <a href="#formacao" className="transition-colors duration-300 hover:text-emerald-200">
              Formação
            </a>
            <a href="#contato" className="transition-colors duration-300 hover:text-emerald-200">
              Contato
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.section
          id="sobre"
          variants={sectionReveal}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center gap-7 py-16 text-center md:py-24"
        >
          <div className="pointer-events-none absolute inset-x-8 top-8 -z-10 h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-transparent to-emerald-300/[0.07] shadow-[0_25px_70px_rgba(2,6,23,0.45)] md:inset-x-16" />
          <Avatar className="size-28 ring-4 ring-emerald-300/25 shadow-[0_0_40px_rgba(16,185,129,0.22)] md:size-32">
            <AvatarImage
              src={profileImageSrc}
              alt="Foto de perfil de Carlos Eduardo Lago"
              className="object-cover"
            />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mx-auto max-w-[92%] bg-gradient-to-r from-white via-slate-100 to-emerald-100 bg-clip-text text-balance text-[2.15rem] leading-[1.05] font-bold tracking-[-0.025em] text-transparent sm:text-5xl md:max-w-none md:text-6xl"
            >
              Carlos Eduardo Lago
            </motion.h1>
            <p className="text-lg font-medium text-emerald-100 md:text-xl">
              Gestor de Tráfego & Copywriter | Meta Ads e Google Ads
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {especialidadesMarketing.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="rounded-full border border-emerald-300/25 bg-slate-900/80 px-3 py-1 text-xs text-emerald-100"
              >
                {item}
              </Badge>
            ))}
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Trabalho com marketing digital unindo duas frentes que, na minha
            visão, precisam andar juntas: gestão de tráfego e copywriting.
            Penso o anúncio dentro de um contexto maior, entendo o negócio a
            fundo e só então desenho a estratégia.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Meu foco é gerar previsibilidade de crescimento com campanhas
            estruturadas, comunicação objetiva e otimização contínua. Mais do que
            entregar relatórios, busco construir um processo que transforme dados
            em decisões claras para escalar resultado com consistência.
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="portfolio-btn portfolio-btn-primary"
            >
              Entrar em contato
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-eduardo-lago-405168222/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-btn portfolio-btn-secondary"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          className="py-12"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="portfolio-card border-emerald-300/35 bg-gradient-to-br from-emerald-400/15 to-sky-400/10 text-slate-100">
            <CardHeader>
              <CardTitle className="text-2xl">Destaque principal: 712 Propaganda</CardTitle>
              <p className="text-base text-slate-200">
                Jan/2026 - atual | Gestor de Tráfego Pago | Performance & Growth
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed text-slate-100/95">
              <p>
                Lidero campanhas no Meta Ads e Google Ads com foco em resultado
                de negócio, indo além de relatórios: estratégia de funil, copy,
                segmentação e otimização contínua.
              </p>
              <p>
                Cada campanha parte de um diagnóstico real do negócio: oferta,
                público e contexto de mercado. Isso garante decisões mais
                precisas e melhor conversão.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          className="py-12"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Pilares de performance
            </h2>
            <span className="text-xs uppercase tracking-[0.18em] text-emerald-200/80">
              Marketing digital
            </span>
          </div>
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pilaresPerformance.map((item) => (
              <motion.div key={item.titulo} variants={itemReveal}>
                <Card className="h-full border border-emerald-200/25 bg-slate-900/90 text-slate-100 shadow-[0_10px_28px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/45">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-emerald-100">{item.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-relaxed text-slate-200">{item.descricao}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          className="py-12"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Competências
            </h2>
            <span className="text-sm text-slate-300">
              São Luís, MA
            </span>
          </div>
          <motion.div className="grid gap-4 md:grid-cols-3" variants={listStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {competenciasPorBloco.map((bloco) => (
              <motion.div key={bloco.titulo} variants={itemReveal}>
                <Card className="h-full border border-cyan-200/20 bg-slate-900/90 text-slate-100 shadow-[0_10px_28px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-cyan-100">{bloco.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {bloco.itens.map((item) => (
                    <p key={item} className="text-base leading-relaxed text-slate-200">
                      - {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          className="py-12"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Diferenciais de atuação
          </h2>
          <Card className="border border-white/10 bg-slate-900/88 text-slate-100 shadow-[0_10px_28px_rgba(2,6,23,0.45)]">
            <CardContent className="space-y-3 pt-6">
              {diferenciaisProfissionais.map((item) => (
                <p key={item} className="text-base leading-relaxed text-slate-200">
                  - {item}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          id="experiencia"
          className="py-12"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Experiência profissional
          </h2>
          <motion.div className="relative space-y-5 border-l border-white/20 pl-6" variants={listStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {experiencias.map((exp, index) => (
              <motion.div
                key={exp.empresa}
                variants={itemReveal}
                transition={{ delay: index * 0.04 }}
                className="relative"
              >
                <motion.span
                  className="absolute -left-[29px] top-5 size-2.5 rounded-full bg-emerald-300 ring-4 ring-slate-950"
                  animate={{ scale: [1, 1.22, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.25 }}
                />
                <Card className="border border-white/10 bg-slate-900/90 text-slate-100 shadow-[0_10px_28px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/35">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-lg md:text-xl">
                        {exp.empresa}
                      </CardTitle>
                      <span className="text-sm text-slate-300">
                        {exp.periodo}
                      </span>
                    </div>
                    <p className="text-base font-medium leading-relaxed text-emerald-100">{exp.cargo}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-relaxed text-slate-200">
                      {exp.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          id="formacao"
          className="py-12"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Formação acadêmica
          </h2>
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {formacao.map((item) => (
              <motion.div key={`${item.instituicao}-${item.curso}`} variants={itemReveal}>
                <Card className="border border-emerald-300/40 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-slate-100 shadow-[0_10px_28px_rgba(2,6,23,0.45)]">
                  <CardHeader>
                    <CardTitle>{item.curso}</CardTitle>
                    <p className="text-base text-slate-200">
                      {item.instituicao} | {item.periodo}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-relaxed text-slate-100/95">{item.descricao}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <Separator className="portfolio-separator" />

        <motion.section
          id="contato"
          className="py-14"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="border border-emerald-200/25 bg-gradient-to-br from-slate-100 to-emerald-50 text-slate-900 shadow-[0_12px_30px_rgba(2,6,23,0.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
            <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Vamos construir sua próxima campanha?
              </h2>
              <p className="max-w-xl text-sm text-slate-600 md:text-base">
                Se você busca crescimento com estratégia, execução e melhoria
                contínua, vamos conversar. Posso apoiar seu projeto com plano de
                mídia, copy orientada à conversão e gestão focada em resultado.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:carloseduardo.lago@yahoo.com.br"
                  className="portfolio-btn portfolio-btn-secondary bg-white/90 text-slate-900 hover:bg-white"
                >
                  carloseduardo.lago@yahoo.com.br
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-btn portfolio-btn-primary"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-eduardo-lago-405168222/"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-btn portfolio-btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <footer className="py-8 text-center text-xs text-slate-400">
          (c) {new Date().getFullYear()} Carlos Eduardo Lago. Todos os direitos
          reservados.
        </footer>
      </main>
    </div>
  );
}
