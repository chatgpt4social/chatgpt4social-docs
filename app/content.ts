import Introduction from "./content/introduction.mdx";
import HowToUse from "./content/how_to_use.mdx"
import ChatgptWhatsAPP from "./content/chatgpt_whatsapp.mdx"
import BaseFeatures from "./content/base_features.mdx"
import ProFeatures from "./content/pro_features.mdx"
import MaxFeatures from "./content/max_features.mdx"
import FrequentlyAskedQuestions from "./content/frequently_asked_questions.mdx"
import CommunitySupport from "./content/community_support.mdx"
import PrivacyPolicy from "./content/privacy_policy.mdx"
import ErrorCodesAndSolutions from "./content/error_codes_and_solutions.mdx"
import AccountManagement from "./content/account_management.mdx"

export type Doc = {
  title: string;
  description: string;
  category: string;
  priority: number;
  slug: string;
  content: JSX.Element;
};

export const allDocs: Doc[] = [
  {
    title: "Introduction",
    description: "About ChatGPT For Social",
    category: "ChatGPT For Social",
    priority: 1,
    slug: "/docs/introduction",
    content: Introduction({}),
  },
  {
    title: "Getting Started",
    description: "Getting Started to Use ChatGPT For Social",
    category: "ChatGPT For Social",
    priority: 2,
    slug: "/docs/how_to_use",
    content: HowToUse({}),
  },
  {
    title: "ChatGPT For WhatsApp",
    description: "全面了解插件的功能",
    category: "ChatGPT For Social",
    priority: 3,
    slug: "/docs/chatgpt_whatsapp",
    content: ChatgptWhatsAPP({}),
  },
  {
    title: "Account Management",
    description: "全面了解插件的功能",
    category: "Features",
    priority: 3,
    slug: "/docs/account_management",
    content: AccountManagement({}),
  },
  {
    title: "Free Version",
    description: "Free",
    category: "Features",
    priority: 4,
    slug: "/docs/base_features",
    content: BaseFeatures({}),
  },
  {
    title: "Pro Version",
    description: "Pro Features",
    category: "Features",
    priority: 5,
    slug: "/docs/pro_features",
    content: ProFeatures({}),
  },
  {
    title: "FAQ",
    description: "Frequently Asked Questions",
    category: "Support",
    priority: 7,
    slug: "/docs/frequently_asked_questions",
    content: FrequentlyAskedQuestions({}),
  },
  {
    title: "Error Code",
    description: "Error Codes And Solutions",
    category: "Support",
    priority: 8,
    slug: "/docs/error_codes_and_solutions",
    content: ErrorCodesAndSolutions({}),
  },
  {
    title: "Support",
    description: "User Feedback And Community Support",
    category: "Support",
    priority: 9,
    slug: "/docs/support",
    content: CommunitySupport({}),
  },
  {
    title: "Privacy Policy",
    description: "ChatGPT for Social Privacy Policy",
    category: "Support",
    priority: 10,
    slug: "/docs/privacy_policy",
    content: PrivacyPolicy({}),
  },
];
