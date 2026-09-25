import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/program-page";
import { PROGRAMS } from "@/lib/site-data";

const program = PROGRAMS[0]; // Montessori

export const metadata: Metadata = {
  title: "Montessori — Early Years | Scholars' School, Hassan",
  description:
    "Italian-style Montessori at Scholars' School, Hassan — self-directed, hands-on learning in beautifully prepared environments for the early years.",
};

export default function MontessoriPage() {
  return <ProgramPage program={program} />;
}
