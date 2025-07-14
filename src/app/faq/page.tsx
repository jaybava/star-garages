import { FaqContent } from "@/components/FaqContent";
import { getMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata(
  "Frequently Asked Questions",
  "Find answers to common questions about garage construction, timelines, permits, and more. Expert garage builders in Edmonton & Calgary.",
  [
    'garage construction faq',
    'garage building questions',
    'garage permit information',
    'garage construction timeline',
    'garage building cost edmonton',
    'garage building cost calgary',
    'garage renovation questions',
    'garage suite faq alberta'
  ],
  '/faq'
);

export default function FAQ() {
  return <FaqContent />;
}
