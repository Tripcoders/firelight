import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Firelight Tours | Premium African Safari Experiences",
  description: "Experience the magic of Africa with private, boutique safaris. Luxury lodges, expert guides, and unforgettable wildlife encounters in South Africa's most breathtaking destinations.",
  keywords: ["African Safari", "South Africa Tours", "Kruger National Park", "Victoria Falls", "Luxury Safari", "Private Tours", "Wildlife Experience"],
  authors: [{ name: "Firelight Tours" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Firelight Tours | Premium African Safari Experiences",
    description: "Experience the magic of Africa with private, boutique safaris. Luxury lodges, expert guides, and unforgettable wildlife encounters.",
    url: "https://firelighttours.co.za",
    siteName: "Firelight Tours",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "African Safari Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firelight Tours | Premium African Safari Experiences",
    description: "Experience the magic of Africa with private, boutique safaris.",
    images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
