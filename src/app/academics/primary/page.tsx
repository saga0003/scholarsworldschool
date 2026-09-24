import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/program-page";
import { PROGRAMS } from "@/lib/site-data";

const program = PROGRAMS[1]; // Primary School

export const metadata: Metadata = {
  title: "Primary School — Foundational Years | Scholars' School, Hassan",
  description:
    "Primary School at Scholars' School, Hassan — strong foundations in language, mathematics, science and social studies, built with joy.",
};

export default function PrimaryPage() {
  return <ProgramPage program={program} />;
}
