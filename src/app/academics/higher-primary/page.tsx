import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/program-page";
import { PROGRAMS } from "@/lib/site-data";

const program = PROGRAMS[2];

export const metadata: Metadata = {
  title: "Higher Primary — Middle School | Scholars' School, Hassan",
  description:
    "Higher Primary at Scholars' School, Hassan — a pivotal stage where learners refine skills and grow into independent thinkers.",
};

export default function HigherPrimaryPage() {
  return <ProgramPage program={program} />;
}
