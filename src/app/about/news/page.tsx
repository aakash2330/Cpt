import type { Metadata } from "next";
import { NewsIndexContent } from "../../_components/site-sections";

export const metadata: Metadata = {
  title: "News | CPT Construction",
  description:
    "Company updates, recognition, and milestones from CPT Construction.",
};

export default function NewsPage() {
  return <NewsIndexContent />;
}
