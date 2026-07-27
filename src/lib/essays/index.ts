import type { ComponentType } from "react";
import WhatToWearHeadshotVancouver from "./what-to-wear-corporate-headshot-vancouver";
import AIInPhotographyWhatChanges from "./ai-in-photography-what-changes-what-doesnt";
import ChristmasFamilyPortraitsWhenToBook from "./christmas-family-portraits-vancouver-when-to-book";

export const essays: Record<string, ComponentType> = {
  "what-to-wear-corporate-headshot-vancouver": WhatToWearHeadshotVancouver,
  "ai-in-photography-what-changes-what-doesnt": AIInPhotographyWhatChanges,
  "christmas-family-portraits-vancouver-when-to-book":
    ChristmasFamilyPortraitsWhenToBook,
};

export function getEssay(slug: string): ComponentType | null {
  return essays[slug] ?? null;
}
