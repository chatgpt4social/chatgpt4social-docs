"use client";
import { Tab } from "@headlessui/react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import toast from "react-hot-toast";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockTabProps = {
  title: string;
  language: string;
  //The children are compiled as <pre><code>...</code></pre>
  children: React.ReactElement;
};
const LocalStorageKey = "preferredLanguage";
const EventName = "update-preferred-language";

// Save the preferred language in localStorage
async function savePreferredLanguage(language: string) {
  localStorage.setItem(LocalStorageKey, language);
  window.dispatchEvent(new Event(EventName));
}

// Get the preferred language from localStorage
async function getPreferredLanguage() {
  return localStorage.getItem(LocalStorageKey);
}

export const CodeBlock: React.FC<{
  children: React.ReactElement<CodeBlockTabProps>[];
}> = ({ children }) => {
  const [preferredLanguage, setPreferredLanguage] = React.useState<
    string | null
  >(null);
  const [selected, setSelected] = React.useState(0);
  React.useEffect(() => {
    getPreferredLanguage().then((language) => {
      setPreferredLanguage(language);
    });
  }, []);
  // Register a listener for the preferred language
  React.useEffect(() => {
    const listener = () => {
      getPreferredLanguage().then((language) => {
        setPreferredLanguage(language);
      });
    };
    window.addEventListener(EventName, listener);
    return () => window.removeEventListener(EventName, listener);
  }, []);

  React.useEffect(() => {
    if (preferredLanguage) {
      const index = children.findIndex(
        (child) => child.props.language === preferredLanguage
      );
      if (index !== -1) {
        setSelected(index);
      }
    }
  }, [preferredLanguage, children]);

  return (
    <Tab.Group
      onChange={(index) => {
        setSelected(index);
        savePreferredLanguage(children[index].props.language);
      }}
      selectedIndex={selected}
    >
      <div className="flex justify-between">
        <div className="tabs not-prose bg-base-100">
          {React.Children.map(children, (child, index) => {
            const { title } = child.props;
            return (
              <Tab
                key={index}
                className={({ selected }) =>
                  `${selected ? "tab-active" : ""}
                  tab tab-bordered focus:outline-none gap-4`
                }
              >
                {title}
              </Tab>
            );
          })}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              children[selected].props.children.props.children.props.children
            );
            toast.success("Copied to clipboard");
          }}
          className="btn btn-ghost btn-primary btn-sm"
        >
          <ClipboardIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="not-prose">
        {React.Children.map(children, (child, index) => {
          const { language, children } = child.props;
          //The children are compiled as <pre><code>...</code></pre>
          const code = children.props.children.props.children;

          return (
            <Tab.Panels key={index}>
              <Tab.Panel>
                <SyntaxHighlighter language={language} style={atomOneDark}>
                  {code}
                </SyntaxHighlighter>
              </Tab.Panel>
            </Tab.Panels>
          );
        })}
      </div>
    </Tab.Group>
  );
};

export const CodeBlockTab: React.FC<CodeBlockTabProps> = ({ children }) => {
  return <>{children}</>;
};
