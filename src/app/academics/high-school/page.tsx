import type { Metadata } from "next";
import { ProgramPage } from "@/components/site/program-page";
import { PROGRAMS } from "@/lib/site-data";

const program = PROGRAMS[3]; // High School

export const metadata: Metadata = {
  title: "High School — Senior Years | Scholars' School, Hassan",
  description:
    "High School at Scholars' School, Hassan — intellectual rigour meets real-world readiness, from learners to leaders.",
};

export default function HighSchoolPage() {
  return <ProgramPage program={program} />;
}
