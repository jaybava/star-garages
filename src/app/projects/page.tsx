import { ProjectsContent } from "@/components/ProjectsContent";
import { getMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata(
  "Our Projects - Custom Garages & Suites",
  "Explore our portfolio of custom garages, garage suites, and laneway homes built across Edmonton & Calgary. View our latest projects and get inspired.",
  [
    'custom garage projects',
    'garage suite examples',
    'laneway home portfolio',
    'garage builders portfolio',
    'custom garage designs',
    'garage renovation examples',
    'garage construction projects',
    'garage builders work'
  ],
  '/projects'
);

export default function Projects() {
  return <ProjectsContent />;
}
