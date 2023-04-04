"use client";

import { Doc } from "@/app/content";
import { DrawerId } from "@/lib/id";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export const SidebarButton: React.FC<{ doc: Doc }> = ({ doc }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === doc.slug;
  return (
    <li
      onClick={() => {
        // <input id={DrawerId} type="checkbox" className="drawer-toggle" />
        // Find and click the button to close the sidebar
        const sidebarButton = document.getElementById(
          DrawerId
        ) as HTMLInputElement;
        if (sidebarButton) {
          // If the sidebar is open, close it
          if (sidebarButton.checked) {
            sidebarButton.click();
          }
        }

        router.push(doc.slug);
      }}
    >
      <a className={`${isActive ? "active" : ""}`}>{doc.title}</a>
    </li>
  );
};
