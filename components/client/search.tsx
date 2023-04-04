"use client";
import * as React from "react";
import { Dialog } from "@headlessui/react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter } from "next/navigation";

const SearchDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  useHotkeys("meta+k", (e) => {
    e.preventDefault();
    setIsOpen(true);
  });
  return (
    <>
      {/* Dialog */}
      <Dialog
        open={isOpen}
        onClose={() => {
          setQuery("");
          setIsOpen(false);
        }}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="fixed inset-x-50 top-20 bg-base-100 p-4 w-4/5 lg:w-1/2  prose">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input w-full"
              placeholder="Search..."
              enterKeyHint="search"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  router.push(`/search?q=${query}`);
                  setIsOpen(false);
                }
              }}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="input input-sm lg:input-md flex justify-between w-full input-bordered items-center"
      >
        <span>Search the docs</span>{" "}
        <span className="hidden lg:block">
          <kbd className="kbd kbd-sm">⌘</kbd>+
          <kbd className="kbd kbd-sm">K</kbd>
        </span>
      </button>
    </>
  );
};

export default SearchDialog;
