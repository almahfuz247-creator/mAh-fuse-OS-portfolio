import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { TopBar } from "@/components/chrome/TopBar";
import { NavRail } from "@/components/chrome/NavRail";
import { VitalsBar } from "@/components/chrome/VitalsBar";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["500", "700", "900"],
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  display: "swap",
  weight: ["400", "500", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahfuse.os";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "mAh⚡fuse OS — Abdullah Al Mahfuz",
    template: "%s · mAh⚡fuse OS",
  },
  description:
    "UX that holds charge under pressure. Portfolio OS of Abdullah Al Mahfuz — UX designer at UIU, Dhaka.",
  keywords: [
    "UX designer",
    "portfolio",
    "Abdullah Al Mahfuz",
    "UIU",
    "information architecture",
    "wireframing",
    "Figma",
    "usability testing",
    "Dhaka",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "mAh⚡fuse OS",
    title: "mAh⚡fuse OS — Abdullah Al Mahfuz",
    description:
      "UX that holds charge under pressure. Portfolio OS of Abdullah Al Mahfuz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "mAh⚡fuse OS — Abdullah Al Mahfuz",
    description: "UX that holds charge under pressure.",
    creator: "@mahfuz",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  affiliation: {
    "@type": "Organization",
    name: profile.org,
  },
  knowsAbout: profile.skills.hard,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jet.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* No-flash theme init. Dark default; .light only if explicitly stored. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('mahfuse-theme');
                if (t === 'light') document.documentElement.classList.add('light');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only">
            skip to content
          </a>
          <TopBar />
          <NavRail />
          <main id="main" className="flex-1">
            {children}
          </main>
          <VitalsBar />
          <JsonLd data={jsonLd} />
        </ThemeProvider>
      </body>
    </html>
  );
}
