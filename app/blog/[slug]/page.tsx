import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "../../data/blog";
import { SITE_NAME, absoluteUrl } from "../../data/site";
import { blogPostJsonLd } from "../../lib/json-ld";
import { JsonLd } from "../../components/JsonLd";
import { ContactMenu } from "../../components/ContactMenu";
import { SiteNav } from "../../components/SiteNav";
import { SiteFooter } from "../../components/SiteFooter";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado" };

  const title = post.title;
  const pageUrl = absoluteUrl(`/blog/${slug}`);

  return {
    title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url: pageUrl,
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <JsonLd data={blogPostJsonLd(post)} />
      <SiteNav />

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-gray-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-500 mb-4">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime} de leitura
              </span>
              <span aria-hidden>·</span>
              <span>{SITE_NAME}</span>
            </div>
            <h1 className="text-[36px] md:text-[48px] font-black leading-tight tracking-tight mb-5">
              {post.title}
            </h1>
            <p className="text-[18px] text-gray-400 leading-relaxed">{post.description}</p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 border-t border-white/5 pt-10">
            {post.sections.map((section, index) => (
              <section key={index}>
                {section.heading ? (
                  <h2 className="text-[22px] font-black text-white mb-4">{section.heading}</h2>
                ) : null}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[16px] text-gray-400 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 pl-1">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-[15px] text-gray-400 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <footer className="mt-16 border border-white/10 rounded-3xl p-8 md:p-10 bg-white/[0.02] text-center">
            <h2 className="text-[22px] font-black mb-3">
              Quer desenvolver software sob medida?
            </h2>
            <p className="text-[15px] text-gray-400 mb-6 leading-relaxed">
              A {SITE_NAME} é uma software house brasileira em Brasília. Entre em contato para
              conversar sobre seu projeto.
            </p>
            <ContactMenu label="Entrar em contato" variant="primary" align="center" />
          </footer>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
