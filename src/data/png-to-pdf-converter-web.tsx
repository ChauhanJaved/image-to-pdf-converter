// src/data/png-to-pdf-converter-web.tsx

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
  "Convert PNG to PDF securely in your browser. No file uploads required - 100% private. Try fully functional free trial. Works on mobile & desktop.";

const features = [
  "Convenient Online Web App for Instant Use",
  "Local, Secure, and Private File Conversion",
  "Flexible PDF Creation Options",
  "Easily Customizable Orientation, Page Size, and Margins",
  "Simple Drag-and-Drop with Easy Image Rearrangement",
];

const faqs = [
  {
    question: "Do I need to pay to use this tool?",
    answer:
      "You can start right away without paying anything. The free trial gives you full access to every feature — the only limit is how many conversions you can run. When you need more, a one-time license unlocks unlimited use. No subscriptions, no hidden fees.",
  },
  {
    question: "Will my PNG files be sent to any server?",
    answer:
      "Not at all. The entire conversion runs inside your browser — your images stay on your device from start to finish. There's no upload step, no cloud processing, and nothing stored remotely. It's as private as working with a local desktop app.",
  },
  {
    question: "How does the tool handle PNG transparency?",
    answer:
      "PNGs often have transparent backgrounds — logos, icons, UI elements. The converter lets you control how that transparency is rendered in the PDF, so your output looks intentional rather than showing unexpected black or white fills behind your images.",
  },
  {
    question: "Can I control the order of pages in the final PDF?",
    answer:
      "Yes. After dropping your PNG files in, you can drag and rearrange the thumbnails into whatever order you want before converting. This is especially handy when working with sequential screenshots or multi-page visual documents.",
  },
  {
    question: "What page size and orientation options are available?",
    answer:
      "You can pick from A4, US Letter, or image-fit sizing, and choose between portrait and landscape orientation. Margin control is also included. Wide screenshots tend to work better in landscape, while tall graphics suit portrait — the choice is yours.",
  },
];

export const PNGtoPDFConverterWeb: portfolioItem = {
  id: ProductIDs.PNGtoPDFConverterWeb,
  title: productTitles.PNGtoPDFConverterWeb,
  subtitle: productSubTitles.PNGtoPDFConverterWeb,
  src: productImages.PNGtoPDFConverterWeb.imgName,
  width: productImages.PNGtoPDFConverterWeb.width,
  height: productImages.PNGtoPDFConverterWeb.height,
  categories: [Categories.All, Categories.Online, Categories.Converter],
  pageLink: `/${ProductIDs.PNGtoPDFConverterWeb}`,
  productWebsite: productWebsites.PNGtoPDFConverterWeb,
  features,
  description: (
    <div className="flex flex-col">
      <h2 className="mt-10 font-bold">
        Why Convert PNG to PDF in Your Browser?
      </h2>
      <p className="mt-2">
        PNG files are ideal for high-quality graphics, screenshots, and images
        with transparent backgrounds — but they&#39;re not always easy to share
        or print professionally. Converting PNG to PDF gives you a universally
        compatible format that preserves image quality, locks in your layout,
        and is ready for email, printing, or archiving. Our browser-based tool
        makes this conversion instant, without requiring any software
        installation.
      </p>

      <h3 className="mt-8 font-semibold">Your Files Never Leave Your Device</h3>
      <p className="mt-2">
        Unlike most online converters that send your images to a remote server
        for processing, our PNG to PDF tool runs entirely within your browser.
        No files are uploaded, no data is stored, and no third party ever sees
        your images. This makes it the safest choice for converting screenshots,
        design mockups, confidential documents, or any PNG you wouldn&#39;t want
        shared externally.
      </p>

      <h2 className="mt-10 font-bold">
        Preserve PNG Transparency and Image Quality
      </h2>
      <p className="mt-2">
        PNG is the go-to format for graphics with transparent backgrounds —
        logos, icons, UI screenshots, and design assets. Our converter handles
        PNG transparency correctly, giving you control over how the background
        appears in the final PDF. The result is a crisp, high-fidelity document
        that accurately reflects your original images without quality loss or
        compression artifacts.
      </p>

      <h2 className="mt-10 font-bold">
        Merge Multiple PNGs or Keep Them Separate
      </h2>
      <p className="mt-2">
        Need to compile a series of screenshots into one document? Or export
        each PNG as its own PDF? Our tool supports both workflows. Combine
        multiple PNG images into a single, well-structured PDF — perfect for
        reports, portfolios, or step-by-step guides — or generate individual
        PDFs per image when you need standalone files for each page.
      </p>

      <h3 className="mt-8 font-semibold">
        Full Control Over Page Layout and Sizing
      </h3>
      <p className="mt-2">
        Every PNG is different — a wide screenshot needs landscape orientation,
        while a portrait infographic fits best on A4. Our tool lets you choose
        orientation (portrait or landscape), page size (A4, US Letter, or
        image-fit), and margin width before you convert. This means your PDF
        looks intentional and professional, not just a raw image dump into a
        document.
      </p>

      <h3 className="mt-8 font-semibold">
        Drag, Drop, and Reorder Before You Convert
      </h3>
      <p className="mt-2">
        Getting the page order right matters — especially when converting
        multi-step screenshots or sequenced visuals. Simply drag your PNG files
        into the app, then reorder them by dragging thumbnails into the correct
        sequence. What you see is what you get, so you can confidently finalize
        your PDF without guessing the output order.
      </p>

      <h2 className="mt-10 font-bold">
        No Installation, No Account, No Waiting
      </h2>
      <p className="mt-2">
        Open the tool in any modern browser and start converting immediately.
        There&#39;s nothing to download, no sign-up required, and no queue to
        wait in. The app loads once and then works offline — so even if your
        internet drops mid-session, your conversions continue uninterrupted.
        It&#39;s the fastest path from PNG to PDF with zero friction.
      </p>

      <h3 className="mt-8 font-semibold">Works Across All Your Devices</h3>
      <p className="mt-2">
        Whether you&#39;re on a Windows PC, Mac, Linux machine, iPad, or Android
        phone, our PNG to PDF converter works seamlessly in your browser. No
        platform-specific apps, no compatibility issues. If your device has a
        modern browser, you&#39;re ready to convert — making it a reliable tool
        whether you&#39;re at your desk or working on the go.
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
    title: `${productTitles.PNGtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
    keywords:
      "private png to pdf, client-side pdf converter, no upload image to pdf, convert png to pdf mobile, merge photos to pdf online, png to pdf secure, online png to pdf converter, png to pdf tool, png to pdf trial, batch png to pdf online, image to pdf converter, secure pdf tool",
    description,
    alternates: {
      canonical: productWebsites.PNGtoPDFConverterWeb,
    },
    openGraph: {
      title: `${productTitles.PNGtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
      description,
      url: productWebsites.PNGtoPDFConverterWeb,
      siteName: siteName,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.PNGtoPDFConverterWebOG.imgName,
            width: productImages.PNGtoPDFConverterWebOG.width,
          }),
          width: productImages.PNGtoPDFConverterWebOG.width,
          height: productImages.PNGtoPDFConverterWebOG.height,
          alt: `${productTitles.PNGtoPDFConverterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@pdftifftools",
      creator: "@pdftifftools",
      title: `${productTitles.PNGtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
      description,
      images: [
        cloudinaryLoader({
          src: productImages.PNGtoPDFConverterWebOG.imgName,
          width: productImages.PNGtoPDFConverterWebOG.width,
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
          name: productTitles.PNGtoPDFConverterWeb,
          item: productWebsites.PNGtoPDFConverterWeb,
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
