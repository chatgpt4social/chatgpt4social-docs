import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./components/client/codeblock";

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}

const H2: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children }) => {
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor}>
      <a href={link}></a>
      {children}
    </h2>
  );
};

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h2: H2,
    ...components,
  };
}
