"use client";
import { Doc } from "@/app/content";

const RenderDoc: React.FC<{ doc: Doc }> = ({ doc }) => {
  return (
    <article className="prose max-w-2xl space-y-4">
      <h1>{doc.title}</h1>
      {doc.content}
    </article>
  );
};

export default RenderDoc;
