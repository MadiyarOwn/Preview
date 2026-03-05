import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

const site = {
  name: "AstraAI",
  description:
    "AI-powered platform to automate workflows, analyze data, and boost productivity.",
  url: "https://example.com",
  ogImage: "/images/og.jpg",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} — AI Landing`,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  keywords: ["AI", "automation", "blockchain", "AI tools", "productivity"],

  applicationName: site.name,

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — AI Landing`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} preview`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Landing`,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={[
          inter.variable,
          montserrat.variable,
          "min-h-full font-sans antialiased bg-black text-white",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}