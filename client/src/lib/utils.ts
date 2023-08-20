import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getCountryFlagCodeByLanguage(language: "en" | "uk") {
  switch (language) {
    case "en":
      return "uk";
    case "uk":
      return "ua";
  }
}

function trailingDots(text: string) {
  return `${text}...`
}

export { cn, getCountryFlagCodeByLanguage, trailingDots };
