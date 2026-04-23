"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
    curso: "Marketing Digital",
    periodo: "2024 - 2025",
    descricao:
      "Formação orientada à estratégia de canais, análise de performance e aplicação prática de copy para campanhas de aquisição e conversão.",
  },
];

export default function Home() {
  const profileImageSrc =
    "https://raw.githubusercontent.com/CarlosEduardoLago/portf-lio/master/public/profile.jpg";
  const whatsappLink =
    "https://wa.me/?text=Olá%20Carlos%2C%20vi%20seu%20portfólio%20e%20quero%20falar%20sobre%20um%20projeto.";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#111827_35%,_#020617_100%)] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarImage src={profileImageSrc} alt="Carlos Eduardo Lago" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold tracking-tight">
              Carlos Eduardo Lago
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#sobre" className="hover:text-white">
              Sobre
            </a>
            <a href="#experiencia" className="hover:text-white">
              Experiência
            </a>
            <a href="#formacao" className="hover:text-white">
              Formação
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 py-16 text-center md:py-24"
        >
          <Avatar className="size-28 ring-4 ring-background shadow-lg md:size-32">
            <AvatarImage
              src={profileImageSrc}
              alt="Foto de perfil de Carlos Eduardo Lago"
              className="object-cover"
            />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
          <Badge variant="secondary" className="rounded-full bg-white/15 text-white">
            Disponível para novos projetos
          </Badge>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Carlos Eduardo Lago
            </h1>
            <p className="text-base text-slate-300 md:text-lg">
              Gestor de Tráfego & Copywriter | Meta Ads e Google Ads
            </p>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Trabalho com marketing digital unindo duas frentes que, na minha
            visão, precisam andar juntas: gestão de tráfego e copywriting.
            Penso o anúncio dentro de um contexto maior, entendo o negócio a
            fundo e só então desenho a estratégia.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Meu foco é gerar previsibilidade de crescimento com campanhas
            estruturadas, comunicação objetiva e otimização contínua. Mais do que
            entregar relatórios, busco construir um processo que transforme dados
            em decisões claras para escalar resultado com consistência.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:carloseduardo.lago@yahoo.com.br"
              className={buttonVariants({ variant: "default" })}
            >
              Entrar em contato
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-eduardo-lago-405168222"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              LinkedIn
            </a>
          </div>
        </motion.section>

        <Separator />

        <section className="py-12">
          <Card className="border-emerald-300/30 bg-emerald-500/10 text-slate-100">
            <CardHeader>
              <CardTitle className="text-2xl">Destaque principal: 712 Propaganda</CardTitle>
              <p className="text-sm text-slate-200">
                Jan/2026 - atual | Gestor de Tráfego Pago | Performance & Growth
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-100/95">
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
        </section>

        <Separator />

        <section className="py-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Competências
            </h2>
            <span className="text-xs text-slate-300">
              São Luís, MA
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {competenciasPorBloco.map((bloco) => (
              <Card key={bloco.titulo} className="bg-slate-900/70 text-slate-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{bloco.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {bloco.itens.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-slate-200">
                      - {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="py-12">
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Diferenciais de atuação
          </h2>
          <Card className="bg-slate-900/70 text-slate-100">
            <CardContent className="space-y-3 pt-6">
              {diferenciaisProfissionais.map((item) => (
                <p key={item} className="text-sm leading-relaxed text-slate-200">
                  - {item}
                </p>
              ))}
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section id="experiencia" className="py-12">
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Experiência profissional
          </h2>
          <div className="relative space-y-5 border-l border-white/20 pl-6">
            {experiencias.map((exp, index) => (
              <motion.div
                key={exp.empresa}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-5 size-2.5 rounded-full bg-emerald-300 ring-4 ring-slate-950" />
                <Card className="bg-slate-900/75 text-slate-100">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-base md:text-lg">
                        {exp.empresa}
                      </CardTitle>
                      <span className="text-xs text-slate-300">
                        {exp.periodo}
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{exp.cargo}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-200">
                      {exp.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        <section id="formacao" className="py-12">
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Formação acadêmica
          </h2>
          <Card className="mb-6 border-emerald-300/30 bg-emerald-500/10 text-slate-100">
            <CardHeader>
              <CardTitle>Foco de formação: Marketing Digital</CardTitle>
              <p className="text-sm text-slate-200">
                Descomplica | 2024 - 2025
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-100/95">
                Especialização direcionada para estratégia de canais, performance,
                copy e leitura de métricas para escalar resultados.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            {formacao.map((item) => (
              <Card
                key={`${item.instituicao}-${item.curso}`}
                className="bg-slate-900/70 text-slate-100"
              >
                <CardHeader>
                  <CardTitle className="text-base">{item.curso}</CardTitle>
                  <p className="text-sm text-slate-300">
                    {item.instituicao}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm text-slate-200">{item.descricao}</p>
                  <span className="text-xs text-slate-300">
                    {item.periodo}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section id="contato" className="py-14">
          <Card className="bg-slate-100 text-slate-900">
            <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Vamos construir sua proxima campanha?
              </h2>
              <p className="max-w-xl text-sm text-slate-600 md:text-base">
                Se você busca crescimento com estratégia, execução e melhoria
                contínua, vamos conversar. Posso apoiar seu projeto com plano de
                mídia, copy orientada à conversão e gestão focada em resultado.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:carloseduardo.lago@yahoo.com.br"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  carloseduardo.lago@yahoo.com.br
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "default" })}
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-eduardo-lago-405168222"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="py-8 text-center text-xs text-slate-400">
          (c) {new Date().getFullYear()} Carlos Eduardo Lago. Todos os direitos
          reservados.
        </footer>
      </main>
    </div>
  );
}
