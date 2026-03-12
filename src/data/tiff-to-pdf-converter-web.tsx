// src/data/tiff-to-pdf-converter-web.tsx
import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
  siteName,
  websiteURL,
} from "@/data/website-data";

import cloudinaryLoader from "@/lib/cloudinary-loader";

const description =
  "Convert TIFF to PDF securely in your browser. No file uploads required - 100% private. Try fully functional free trial. Works on mobile & desktop.";

const features = [
  "Convenient Online Web App for Instant Use",
  "Local, Secure, and Private File Conversion",
  "Flexible PDF Creation Options for Multi-Page TIFFs",
  "Easily Customizable Orientation, Page Size, and Margins",
  "Simple Drag-and-Drop with Easy Image Rearrangement",
];

const faqs = [
  {
    question: "Is the TIFF to PDF converter free to use?",
    answer:
      "The tool offers a free trial with a limited number of operations — fully functional with no feature restrictions during the trial. No account required to try it. For unlimited operations, a one-time license purchase is available.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All conversions happen entirely in your browser using client-side processing. Your files never leave your device, ensuring complete privacy and security.",
  },
  {
    question: "Can I convert multi-page TIFF files?",
    answer:
      "Yes. You can easily convert multi-page TIFF documents into a single PDF, combine multiple TIFF files, or convert each TIFF image into its own separate PDF file.",
  },
  {
    question: "What devices and operating systems are supported?",
    answer:
      "The converter works on any device with a modern browser — desktop, laptop, tablet, or smartphone. No downloads or installations are required.",
  },
  {
    question: "Can I customize the PDF page size, orientation, and margins?",
    answer:
      "Yes. You can choose from standard page sizes like A4 and US Letter, switch between portrait and landscape orientation, and adjust margins to suit your layout before converting.",
  },
];

export const TIFFtoPDFConverterWeb: portfolioItem = {
  id: ProductIDs.TIFFtoPDFConverterWeb,
  title: productTitles.TIFFtoPDFConverterWeb,
  subtitle: productSubTitles.TIFFtoPDFConverterWeb,
  src: productImages.TIFFtoPDFConverterWeb.imgName,
  width: productImages.TIFFtoPDFConverterWeb.width,
  height: productImages.TIFFtoPDFConverterWeb.height,
  categories: [Categories.All, Categories.Online, Categories.Converter],
  pageLink: `/${ProductIDs.TIFFtoPDFConverterWeb}`,
  productWebsite: productWebsites.TIFFtoPDFConverterWeb,
  features,
  description: (
    <div className="flex flex-col">
      <h2 className="mt-10 font-bold">
        Secure, Browser-Based TIFF to PDF Conversion
      </h2>
      <p className="mt-2">
        Transform your high-resolution TIFF images into universally accessible
        PDF documents directly within your browser. Unlike alternatives that
        require cloud uploads, our advanced converter performs all processing
        locally on your device. This means your sensitive scanned documents,
        medical records, or professional photography never leave your computer,
        guaranteeing elite privacy and eliminating the risk of data breaches.
      </p>

      <h3 className="mt-8 font-semibold">
        Zero Uploads – Lightning-Fast Offline Performance
      </h3>
      <p className="mt-2">
        Because there is no need to upload hefty TIFF files to an external
        server, you experience zero wait times for data transfer. Enjoy rapid
        conversions regardless of your internet connection speed. Our tool is
        optimized to deliver true offline security while running as a modern web
        application.
      </p>

      <h2 className="mt-10 font-bold">
        Comprehensive Solutions for Multi-Page TIFFs
      </h2>
      <p className="mt-2">
        TIFFs are frequently used for multi-page documents, and our converter is
        purpose-built to handle them effortlessly. Whether you need to merge an
        entire directory of TIFF images into a single, cohesive PDF book, or
        split a multi-page TIFF into individual PDF files, you have total
        control.
      </p>

      <h3 className="mt-8 font-semibold">
        Merge & Organize TIFF Files Instantly
      </h3>
      <p className="mt-2">
        Compile dense archives or legal portfolios by merging several TIFF
        inputs into one streamlined PDF. Before initiating the conversion,
        easily reorder your images to guarantee a perfectly sequenced final
        document.
      </p>

      <h3 className="mt-8 font-semibold">
        Precision PDF Formatting & Layout Control
      </h3>
      <p className="mt-2">
        Take command of the final output with rich formatting tools:
        Orientation: Define your document layout with automatic, portrait, or
        landscape settings. Page Size: Select from standardized dimensions like
        US Letter, A4, or let the PDF inherit the exact dimensions of the source
        TIFF. Margins: Fine-tune borders to match strict submission guidelines
        or enhance visual appeal.
      </p>

      <h3 className="mt-8 font-semibold">
        Preserve Image Quality in Print-Ready PDFs
      </h3>
      <p className="mt-2">
        TIFF is synonymous with lossless quality, and your conversions
        shouldn&#39;t diminish that. Our rendering engine perfectly retains the
        detail of your source files, delivering high-fidelity, print-ready PDFs
        that are perfect for professional publishing or archiving.
      </p>

      <h2 className="mt-10 font-bold">Frictionless Drag-and-Drop Workflow</h2>
      <p className="mt-2">
        Skip the clunky file explorer dialogs. Simply grab your TIFFs and drop
        them onto the canvas. The responsive interface immediately queues your
        files, making bulk conversions surprisingly simple and highly
        productive.
      </p>

      <h3 className="mt-8 font-semibold">Universal Device Compatibility</h3>
      <p className="mt-2">
        No software installation is necessary. Whether you are on Windows, Mac,
        Linux, or a mobile operating system, our web app functions flawlessly.
        Access a professional-grade TIFF to PDF engine from your smartphone or
        desktop without clogging up your hard drive with cumbersome
        applications.
      </p>

      <h2 className="mt-10 font-bold">Frequently Asked Questions :</h2>

      <dl className="mt-5 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <dt className="font-semibold">{faq.question}</dt>
            <dd className="mt-2">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  ),
  metaData: {
    title: `${productTitles.TIFFtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
    keywords:
      "private tiff to pdf, client-side pdf converter, no upload tiff to pdf, convert tiff to pdf mobile, merge tiff to pdf online, tiff to pdf secure, online tiff to pdf converter, multi-page tiff to pdf, tiff to pdf trial, batch tiff to pdf online, secure pdf tool, image to pdf converter",
    description,
    alternates: {
      canonical: productWebsites.TIFFtoPDFConverterWeb,
    },
    openGraph: {
      title: `${productTitles.TIFFtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
      description,
      url: productWebsites.TIFFtoPDFConverterWeb,
      siteName: siteName,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.TIFFtoPDFConverterWebOG.imgName,
            width: productImages.TIFFtoPDFConverterWebOG.width,
          }),
          width: productImages.TIFFtoPDFConverterWebOG.width,
          height: productImages.TIFFtoPDFConverterWebOG.height,
          alt: `${productTitles.TIFFtoPDFConverterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@pdftifftools",
      creator: "@pdftifftools",
      title: `${productTitles.TIFFtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
      description,
      images: [
        cloudinaryLoader({
          src: productImages.TIFFtoPDFConverterWebOG.imgName,
          width: productImages.TIFFtoPDFConverterWebOG.width,
        }),
      ],
    },
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${websiteURL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: productTitles.TIFFtoPDFConverterWeb,
          item: productWebsites.TIFFtoPDFConverterWeb,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
