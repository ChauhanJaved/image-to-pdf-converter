import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();

export enum HeaderNavItems {
  Home = "home",
  Pricing = "purchase",
  Contact = "contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Pricing,
  HeaderNavItems.Contact,
];

export const productImages = {
  JPGtoPDFConverterWeb: {
    title: "JPG to PDF Converter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-web-icon".toLowerCase()}`,
    width: 1170,
    height: 2532,
  },
  JPGtoPDFConverterDesktop: {
    title: "JPG to PDF Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  PNGtoPDFConverterWeb: {
    title: "PNG to PDF Converter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"png-to-pdf-converter-web-icon".toLowerCase()}`,
    width: 1024,
    height: 1024,
  },
  PNGtoPDFConverterDesktop: {
    title: "PNG to PDF Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"png-to-pdf-converter".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  TIFFtoPDFConverterWeb: {
    title: "TIFF to PDF Converter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"ptiff-to-pdf-converter-web-icon".toLowerCase()}`,
    width: 1024,
    height: 1024,
  },
  TIFFtoPDFConverterDesktop: {
    title: "TIFF to PDF Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-to-pdf-converter".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  TIFFtoPDFConverterSettings: {
    title: "TIFF to PDF Converter Settings",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-to-pdf-converter-settings".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  TIFFtoPDFConverterFilesSelected: {
    title: "TIFF to PDF Converter Files Selected",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-to-pdf-converter-files-selected".toLowerCase()}`,
    width: 756,
    height: 463,
  },
};
export enum Categories {
  All = "All",
  WebApp = "Web App",
  DesktopApp = "Desktop App",
  Converter = "Converter",
  Splitter = "Splitter",
  Merger = "Merger",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.WebApp,
  Categories.DesktopApp,
  Categories.Converter,
  Categories.Splitter,
  Categories.Merger,
];

export enum ProductIDs {
  JPGtoPDFConverterWeb = "jpg-to-pdf-converter",
  JPGtoPDFConverterDesktop = "jpg-to-pdf-converter-desktop",
  PNGtoPDFConverterWeb = "png-to-pdf-converter",
  PNGtoPDFConverterDesktop = "png-to-pdf-converter-desktop",
  TIFFtoPDFConverterWeb = "tiff-to-pdf-converter",
  TIFFtoPDFConverterDesktop = "tiff-to-pdf-converter-desktop",
}
export const productTitles = {
  JPGtoPDFConverterWeb: "JPG to PDF Converter",
  JPGtoPDFConverterDesktop: "JPG to PDF Converter",
  PNGtoPDFConverterWeb: "PNG to PDF Converter",
  PNGtoPDFConverterDesktop: "PNG to PDF Converter",
  TIFFtoPDFConverterWeb: "TIFF to PDF Converter",
  TIFFtoPDFConverterDesktop: "TIFF to PDF Converter",
} as const;
export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];

export const productSubTitles = {
  JPGtoPDFConverterWeb:
    "Online Tool to Convert & Merge JPG to PDF – Secure & Private, Your Files Never Leave Your Device",
  JPGtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PNGtoPDFConverterWeb:
    "Online Tool to Convert & Merge PNG to PDF – Secure & Private, Your Files Never Leave Your Device",
  PNGtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  TIFFtoPDFConverterWeb:
    "Online Tool to Convert & Merge TIFF to PDF – Secure & Private, Your Files Never Leave Your Device",
  TIFFtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];

export const productWebsites = {
  JPGtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/jpg-to-pdf-converter",
  JPGtoPDFConverterDesktop: "http://www.jpg-to-pdf-converter.com",
  PNGtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/png-to-pdf-converter",
  PNGtoPDFConverterDesktop: "https://www.png-to-pdf-converter.com",
  TIFFtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/tiff-to-pdf-converter",
  TIFFtoPDFConverterDesktop: "https://www.tiff-to-pdf-converter.com",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  JPGtoPDFConverter:
    "https://jpg-to-pdf-converter.com/downloads/jpg-to-pdf-converter-setup.exe",
  PNGtoPDFConverter:
    "https://png-to-pdf-converter.com/downloads/png-to-pdf-converter-setup.exe",
  TIFFtoPDFConverter:
    "https://tiff-to-pdf-converter.com/downloads/tiff-to-pdf-converter-setup.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];
export interface portfolioItem {
  id: ProductIDs;
  title: ProductTitles;
  subtitle: ProductSubTitles;
  src: string;
  width: number;
  height: number;
  categories: Categories[];
  pageLink: string;
  productWebsite: ProductWebsite;
  downloadLink?: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}
