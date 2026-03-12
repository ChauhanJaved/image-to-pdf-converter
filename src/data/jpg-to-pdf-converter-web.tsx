// src/data/jpg-to-pdf-converter-web.tsx

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
  "Convert JPG to PDF securely in your browser. No file uploads required - 100% private. Try fully functional free trial. Works on mobile & desktop.";

const features = [
  "Convenient Online Web App for Instant Use",
  "Local, Secure, and Private File Conversion",
  "Flexible PDF Creation Options",
  "Easily Customizable Orientation, Page Size, and Margins",
  "Simple Drag-and-Drop with Easy Image Rearrangement",
];

const faqs = [
  {
    question: "Is the JPG to PDF converter free to use?",
    answer:
      "The tool offers a free trial with a limited number of operations — fully functional with no feature restrictions during the trial. No account required to try it. For unlimited operations, a one-time license purchase is available.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All conversions happen entirely in your browser using client-side processing. Your files never leave your device, ensuring complete privacy and security.",
  },
  {
    question: "Can I merge multiple JPG images into one PDF?",
    answer:
      "Yes. You can combine multiple JPG images into a single PDF or convert each image into its own separate PDF file, depending on your needs.",
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

export const JPGtoPDFConverterWeb: portfolioItem = {
  id: ProductIDs.JPGtoPDFConverterWeb,
  title: productTitles.JPGtoPDFConverterWeb,
  subtitle: productSubTitles.JPGtoPDFConverterWeb,
  src: productImages.JPGtoPDFConverterWeb.imgName,
  width: productImages.JPGtoPDFConverterWeb.width,
  height: productImages.JPGtoPDFConverterWeb.height,
  categories: [Categories.All, Categories.Online, Categories.Converter],
  pageLink: `/${ProductIDs.JPGtoPDFConverterWeb}`,
  productWebsite: productWebsites.JPGtoPDFConverterWeb,
  features,
  description: (
    <div className="flex flex-col">
      <h2 className="mt-10 font-bold">
        Local, Secure, and Private File Conversion
      </h2>
      <p className="mt-2">
        Our JPG to PDF converter prioritizes your file security by processing
        everything locally on your device. Unlike cloud-based tools that upload
        your images to external servers, our solution ensures your files never
        leave your browser. This approach guarantees complete privacy, making it
        the perfect choice for users working with sensitive or personal data.
        All conversions occur directly in your browser, giving you peace of mind
        that your files remain secure and under your control.
      </p>

      <h3 className="mt-8 font-semibold">
        No Uploads Required – 100% Offline Conversion
      </h3>
      <p className="mt-2">
        Unlike other web-based tools, our JPG to PDF converter operates entirely
        offline. By eliminating the need for uploads, you can enjoy faster
        processing times and complete assurance that your data stays private.
        Whether you&#39;re working on confidential projects or personal
        documents, this feature ensures maximum privacy and convenience.
      </p>

      <h2 className="mt-10 font-bold">
        Flexible PDF Creation Options for Every Need
      </h2>
      <p className="mt-2">
        Our JPG to PDF converter adapts to your requirements with versatile
        conversion modes. Choose to: Combine multiple JPGs into one PDF for
        cohesive presentations or document compilations. Convert each JPG into
        an individual PDF for single-image needs or streamlined organization.
        This flexibility allows you to customize your PDF creation process to
        suit any project or purpose.
      </p>

      <h3 className="mt-8 font-semibold">Combine JPGs with Ease</h3>
      <p className="mt-2">
        Whether you&rsquo;re looking to create a single PDF from multiple images
        or generate separate PDFs for each image, our tool gives you full
        control. This flexibility is ideal for creating professional reports,
        organizing photo collections, or preparing personal projects.
      </p>

      <h3 className="mt-8 font-semibold">
        Customize Orientation, Page Size, and Margins
      </h3>
      <p className="mt-2">
        Tailor your PDFs with a wide range of customization options:
        Orientation: Switch between portrait and landscape modes to suit your
        layout. Page Size: Select from standard sizes like A4, US Letter, or
        fit-to-image for a perfect match. Margins: Adjust margins to enhance
        readability or meet specific formatting needs. With these features, you
        can create polished and professional PDFs that are ready for printing,
        sharing, or archiving.
      </p>

      <h3 className="mt-8 font-semibold">
        Professional Layout Options for Print-Ready PDFs
      </h3>
      <p className="mt-2">
        Our PDF converter ensures that your final output meets professional
        standards. Whether you&rsquo;re preparing documents for work, school, or
        personal use, our layout customization options help you create visually
        appealing and well-structured PDFs every time.
      </p>

      <h2 className="mt-10 font-bold">Intuitive Drag-and-Drop Functionality</h2>
      <p className="mt-2">
        Simplify your workflow with an easy-to-use drag-and-drop interface.
        Quickly upload images by dragging them directly into the converter. This
        eliminates the hassle of navigating through complex menus and saves you
        valuable time.
      </p>

      <h3 className="mt-8 font-semibold">
        Rearrange Images to Perfect Your PDF
      </h3>
      <p className="mt-2">
        Before converting your images, easily rearrange their order to ensure
        your PDF is exactly how you want it. This feature is ideal for creating
        sequential documents, such as step-by-step guides, storyboards, or
        presentations. Arrange, edit, and convert – all in one seamless process.
      </p>

      <h3 className="mt-8 font-semibold">
        Fast and Reliable JPG to PDF Conversion
      </h3>
      <p className="mt-2">
        Our JPG to PDF converter is designed for speed and efficiency. Enjoy
        quick processing without compromising on quality, making it the perfect
        tool for users with tight deadlines or high-volume tasks.
      </p>

      <h3 className="mt-8 font-semibold">
        Accessible Across Devices – Online Web App
      </h3>
      <p className="mt-2">
        As an online web app, our JPG to PDF converter is accessible from any
        device with a browser. Whether you&rsquo;re using a desktop, laptop,
        tablet, or smartphone, you can convert your JPGs to PDFs without the
        need for downloads or installations. This flexibility ensures you can
        work on the go, anytime and anywhere.
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
    title: `${productTitles.JPGtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
    keywords:
      "private jpg to pdf, client-side pdf converter, no upload image to pdf, convert jpg to pdf mobile, merge photos to pdf online, jpeg to pdf secure, online jpg to pdf converter, jpeg to pdf tool, jpg to pdf trial, batch jpg to pdf online, image to pdf converter, secure pdf tool",
    description,
    alternates: {
      canonical: productWebsites.JPGtoPDFConverterWeb,
    },
    openGraph: {
      title: `${productTitles.JPGtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
      description,
      url: productWebsites.JPGtoPDFConverterWeb,
      siteName: siteName,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.JPGtoPDFConverterWebOG.imgName,
            width: productImages.JPGtoPDFConverterWebOG.width,
          }),
          width: productImages.JPGtoPDFConverterWebOG.width,
          height: productImages.JPGtoPDFConverterWebOG.height,
          alt: `${productTitles.JPGtoPDFConverterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@pdftifftools",
      creator: "@pdftifftools",
      title: `${productTitles.JPGtoPDFConverterWeb} Online | Private, Secure & Free Trial`,
      description,
      images: [
        cloudinaryLoader({
          src: productImages.JPGtoPDFConverterWebOG.imgName,
          width: productImages.JPGtoPDFConverterWebOG.width,
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
          name: productTitles.JPGtoPDFConverterWeb,
          item: productWebsites.JPGtoPDFConverterWeb,
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
