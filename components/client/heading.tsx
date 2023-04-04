// Adds anchor links to h2 headings in the docs
import * as React from "react";

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
export default H2;
