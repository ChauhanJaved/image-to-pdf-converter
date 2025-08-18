// src/data/portfolio-items.ts

// Internal imports
import { portfolioItem } from "@/data/website-data";
import { TIFFtoPDFConverterDesktop } from "./tiff-to-pdf-converter-desktop";
import { TIFFtoPDFConverterWeb } from "./tiff-to-pdf-converter-web";
import { JPGtoPDFConverterWeb } from "./jpg-to-pdf-converter-web";
import { JPGtoPDFConverterDesktop } from "./jpg-to-pdf-converter-desktop";
import { PNGtoPDFConverterWeb } from "./png-to-pdf-converter-web";
import { PNGtoPDFConverterDesktop } from "./png-to-pdf-converter-desktop";

export const portfolioItems: portfolioItem[] = [
  JPGtoPDFConverterWeb,
  PNGtoPDFConverterWeb,
  TIFFtoPDFConverterWeb,
  JPGtoPDFConverterDesktop,
  PNGtoPDFConverterDesktop,
  TIFFtoPDFConverterDesktop,
];
