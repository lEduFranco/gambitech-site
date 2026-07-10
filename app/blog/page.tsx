import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { getBlogPostsSorted } from "../data/blog";
import { SITE_NAME, absoluteUrl } from "../data/site";
import { blogListingJsonLd } from "../lib/json-ld";
import { JsonLd } from "../components/JsonLd";
import { ContactMenu } from "../components/ContactMenu";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog — Software House, Fábrica de Software e Desenvolvimento Sob Medida",
  description:
    "Artigos da Gambit Tech sobre como escolher software house, fábrica de software, custos de desenvolvimento e tecnologia para empresas brasileiras.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Guias práticos sobre software house, desenvolvimento sob medida e tecnologia para negócios.",
    url: absoluteUrl("/blog"),
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getBlogPostsSorted();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <JsonLd data={blogListingJsonLd()} />
      <SiteNav />

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="h-3.5 w-3.5 text-violet-400" />
              <span className="text-[13px] font-medium text-violet-300">Blog Gambit Tech</span>
            </div>
            <h1 className="text-[40px] md:text-[52px] font-black leading-tight tracking-tight mb-5">
              Software house, fábrica de software e desenvolvimento sob medida
            </h1>
            <p className="text-[17px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Guias práticos para empresas que querem contratar desenvolvimento de software com
              clareza — escopo, custo, processo e o que avaliar antes de fechar projeto.
            </p>
          </div>

          <div className="space-y-5">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 text-[12px] text-gray-500 mb-3">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime} de leitura
                  </span>
                </div>
                <h2 className="text-[22px] md:text-[26px] font-black text-white leading-snug mb-3 group-hover:text-violet-200 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-5">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Ler artigo <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center border border-white/10 rounded-3xl p-10 bg-white/[0.02]">
            <h2 className="text-[24px] font-black mb-3">Precisa de uma software house?</h2>
            <p className="text-[15px] text-gray-400 mb-6">
              Fale com a {SITE_NAME} sobre seu projeto de desenvolvimento de software sob medida.
            </p>
            <ContactMenu label="Entrar em contato" variant="primary" align="center" />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
