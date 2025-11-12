import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GREVVY - Transform Your HubSpot Into an AI Powerhouse",
  description: "Grow your revenue autonomously with quantum AI-powered HubSpot solutions. From $499 DIY onboarding to $1,249/mo RevOps AI. 280% average ROI in 14 days.",
  keywords: [
    "HubSpot",
    "HubSpot onboarding",
    "AI automation",
    "RevOps",
    "CRM optimization",
    "sales automation",
    "marketing automation",
    "quantum AI",
    "HubSpot implementation",
    "HubSpot partner"
  ],
  authors: [{ name: "GREVVY" }],
  creator: "GREVVY",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grevvy.com",
    title: "GREVVY - Quantum AI-Powered HubSpot Solutions",
    description: "Transform your HubSpot into an autonomous revenue engine with leadership-guided AI. 500+ companies transformed, 280% average ROI.",
    siteName: "GREVVY",
  },
  twitter: {
    card: "summary_large_image",
    title: "GREVVY - Transform Your HubSpot Into an AI Powerhouse",
    description: "Quantum AI-powered HubSpot onboarding and optimization. 280% average ROI in 14 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
