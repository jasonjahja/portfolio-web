import Navbar from "@/components/Navbar";
import PortfolioAnalytics from "@/components/analytics/PortfolioAnalytics";
import grain from "@/assets/images/grain.webp";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jasonjahja.site"),
  title: "Jason Jahja — Product Designer | UX Case Studies & Portfolio",
  description:
    "Jason Jahja is a product designer specializing in UX case studies, product thinking, and structured user experiences. Explore selected work across B2C, B2B, and physical interaction systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jason Jahja — Product Designer",
    description:
      "Explore UX case studies by Jason Jahja, focused on turning complex product challenges into clear, structured user experiences.",
    url: "/",
    siteName: "Jason Jahja Portfolio",
    images: ["/preview.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Jahja — Product Designer",
    description:
      "Explore UX case studies by Jason Jahja, focused on turning complex product challenges into clear, structured user experiences.",
    images: ["/preview.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jason Jahja",
  url: "https://jasonjahja.site",
  sameAs: [
    "https://www.linkedin.com/in/jason-jahja/",
    "https://www.behance.net/jasonjahja1",
  ],
  jobTitle: "Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body>
        <div className="relative min-h-screen bg-bw0 text-bw8">
          <Navbar />
          {children}
          <PortfolioAnalytics />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-2000 opacity-1"
            style={{ backgroundImage: `url(${grain.src})` }}
          />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
