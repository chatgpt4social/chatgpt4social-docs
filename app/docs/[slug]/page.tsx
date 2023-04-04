import RenderDoc from "@/components/client/doc";
import { allDocs } from "../../content";
import type { Metadata } from "next";
import * as React from "react";
import { HeadingsSidebar } from "./components";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const doc = allDocs.find((doc) => doc.slug === "/docs/" + params.slug);
  return {
    title: doc?.title || "Post not found",
    description: doc?.description || "Post not found",
    openGraph: {
      title: doc?.title || "Post not found",
      type: "article",

      description: doc?.description || "Post not found",
    },
    twitter: {
      card: "summary",
      title: doc?.title || "Post not found",
      description: doc?.description || "Post not found",
    },
  };
}

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({
    slug: doc.slug,
  }));

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => doc.slug === "/docs/" + params.slug);
  if (!doc) {
    return <div>Page not found</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-1 lg:col-span-3">
        <RenderDoc doc={doc} />
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <HeadingsSidebar />
      </div>
    </div>
  );
}
