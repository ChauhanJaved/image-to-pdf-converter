import { portfolioItems } from "@/data/portfolio-items";
import { ProductIDs, websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${websiteURL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteURL}/index.html`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${websiteURL}/${ProductIDs.JPGtoPDFConverterWeb}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.PNGtoPDFConverterWeb}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFtoPDFConverterWeb}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.JPGtoPDFConverterDesktop}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.PNGtoPDFConverterDesktop}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFtoPDFConverterDesktop}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
