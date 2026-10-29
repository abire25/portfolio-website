import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mashuqul Chowdhury — CRM Product Manager & CCaaS Cloud Engineer",
  description:
    "Portfolio of Mashuqul Chowdhury. Over 17 years in telecommunications and enterprise CCaaS/UCaaS migrations across Amazon Connect, Genesys Cloud CX, and Salesforce Voice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=erode@400,401,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-ink min-h-[100svh] selection:bg-sage selection:text-background">
        {children}
      </body>
    </html>
  );
}
