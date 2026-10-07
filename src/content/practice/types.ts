import type { ReactNode } from "react";
import type { RelatedLink, Step } from "@/components/blocks";
import type { Faq } from "@/lib/seo";

export type PracticeArea = {
  slug: string;
  navLabel: string;
  h1: string;
  /** Keyword part of the <title>; the firm suffix is appended automatically. */
  metaTitle: string;
  /** 150-160 characters. */
  metaDescription: string;
  heroSub: string;
  /** Preselects the accident type in the contact form aside. */
  formType: string;

  /** About 200 words, unique to the page. */
  intro: ReactNode;

  topics: { title: string; intro?: string; items: { title: string; body: string }[]; note?: string };

  causes: { title: string; items: string[] };
  /** Injury pages list injuries here. Wrongful death uses `extra` instead. */
  injuries?: { title: string; items: string[] };
  extra?: { title: string; body: ReactNode };

  compensation: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    note: string;
  };

  stepsTitle: string;
  steps: Step[];

  checklist: { title: string; intro?: string; items: string[] };

  legalNotes: { title: string; body: string }[];

  faqs: Faq[];
  related: RelatedLink[];
};

/** Shared compensation categories for injury claims. Wording is deliberately non-guaranteeing. */
export const injuryCompensation = [
  {
    title: "Medical bills",
    body: "Emergency care, hospital stays, surgery, medication, physical therapy and other treatment related to the crash.",
  },
  {
    title: "Lost wages",
    body: "Income you lost while you could not work, and reduced earning capacity if you cannot return to the same job.",
  },
  {
    title: "Pain and suffering",
    body: "Physical pain, emotional distress and the ways the injury limits your daily life.",
  },
  {
    title: "Future care",
    body: "Treatment, rehabilitation, equipment or in-home help your doctors expect you to need later.",
  },
];
