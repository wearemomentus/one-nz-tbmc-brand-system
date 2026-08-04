import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brand.tbmc.dev"),
  title: "One NZ × The Brand Memory Co. | Co-brand System",
  description:
    "The working visual language for One NZ Memory + Intelligence and The Brand Memory Co.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "One NZ × The Brand Memory Co. | Co-brand System",
    description:
      "One system. Two marks. Momentum between them.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 909,
        alt: "One system. Two marks. Momentum between them.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One NZ × The Brand Memory Co. | Co-brand System",
    description: "One system. Two marks. Momentum between them.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
