"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const habilidades = ["Copywriting", "Gestao de trafego", "Google Analytics"];

const experiencias = [
  {
    empresa: "712 Propaganda",
    cargo: "Gestor de Trafego Pago | Performance & Growth",
    periodo: "jan/2026 - atual",
    descricao:
      "Gestao de campanhas no Meta Ads e Google Ads com foco em performance, estrategia de funil completo, testes A/B e copy integrada.",
  },
  {
    empresa: "CVC Viagens",
    cargo: "Analista de marketing digital",
    periodo: "jul/2022 - dez/2025",
    descricao:
      "Monitoramento de metricas, otimizacao de campanhas, aumento de trafego qualificado e construcao de mensagens persuasivas para canais digitais.",
  },
  {
    empresa: "Nexo Engenharia",
    cargo: "Analista de dados",
    periodo: "jan/2020 - jan/2022",
    descricao:
      "Coleta, interpretacao e transformacao de dados em insights acionaveis para suporte estrategico.",
  },
];

const formacao = [
  "Descomplica - Marketing Digital (2024 - 2025)",
  "Universidade Ceuma - Engenharia Civil (2016 - 2020)",
  "Universidade Ceuma - Administracao de Empresas (2007 - 2010)",
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10 md:py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="space-y-5">
          <Badge className="rounded-full px-3 py-1">Portfolio profissional</Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Carlos Eduardo Lago
          </h1>
          <p className="text-lg text-muted-foreground">
            Gestor de Trafego & Copywriter | Meta Ads e Google Ads
          </p>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Atuo com marketing digital unindo estrategia de trafego pago e
            copywriting para gerar crescimento de negocio. Minha visao integra
            comportamento do consumidor, funil de vendas, posicionamento de
            marca e analise de metricas para tomar decisoes orientadas por
            dados.
          </p>
          <div className="flex flex-wrap gap-3">
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
              Ver LinkedIn
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto"
        >
          <Image
            src="/profile.jpg"
            alt="Foto de perfil de Carlos Eduardo Lago"
            width={360}
            height={480}
            className="rounded-3xl border object-cover shadow-xl"
            priority
          />
        </motion.div>
      </motion.section>

      <Separator className="my-10" />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Principais competencias</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {habilidades.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Localizacao</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Sao Luis, Maranhao, Brasil</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10 space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Experiencia</h2>
        <div className="space-y-4">
          {experiencias.map((exp, index) => (
            <motion.div
              key={exp.empresa}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{exp.empresa}</CardTitle>
                  <p className="font-medium">{exp.cargo}</p>
                  <p className="text-sm text-muted-foreground">{exp.periodo}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.descricao}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Formacao</h2>
        <Card>
          <CardContent className="space-y-2 pt-6">
            {formacao.map((curso) => (
              <p key={curso} className="text-muted-foreground">
                {curso}
              </p>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
