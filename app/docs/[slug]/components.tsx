"use client";
import * as React from "react";

export const HeadingsSidebar: React.FC = () => {
  // We can only get these after the page has loaded
  const [headings, setHeadings] =
    React.useState<{ text: string; anchor: string }[]>();
  React.useEffect(() => {
    const headings = document.querySelectorAll("h2");
    const headingList = Array.from(headings).map((heading) => {
      const anchor = heading.querySelector("a");
      if (!anchor) {
        return null;
      }
      return {
        text: heading.textContent,
        anchor: anchor.getAttribute("href"),
      };
    });

    setHeadings(
      headingList.filter((heading) => heading !== null) as {
        text: string;
        anchor: string;
      }[]
    );
  }, []);
  return (
    <div className="sticky top-0 w-full">
      {headings && headings.length > 0 && (
        <ul className="menu bg-base-100 w-full">
          <li>
            <a className="menu-title">also in this article</a>
          </li>
          {headings?.map((heading, i) => (
            <li key={i}>
              <a href={heading.anchor}>{heading.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
