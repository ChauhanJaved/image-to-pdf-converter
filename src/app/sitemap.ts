import { ProductIDs, websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${websiteURL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteURL}/${ProductIDs.JPGtoPDFConverterWeb}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.PNGtoPDFConverterWeb}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFtoPDFConverterWeb}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.JPGtoPDFConverterDesktop}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.PNGtoPDFConverterDesktop}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFtoPDFConverterDesktop}`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
