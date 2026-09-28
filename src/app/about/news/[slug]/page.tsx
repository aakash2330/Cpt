import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticleContent } from "../../../_components/site-sections";
import { getNewsArticle, news } from "../../../_data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};

  const url = `/about/news/${article.slug}`;
  const headline = article.title.replace(/\.$/, "");
  return {
    title: `${headline} | CPT Construction`,
    description: article.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: headline,
      description: article.summary,
      publishedTime: article.date,
      images: [{ url: `/og/${article.slug}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: headline,
      description: article.summary,
      images: [`/og/${article.slug}.png`],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  return <NewsArticleContent article={article} />;
}
