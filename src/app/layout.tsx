import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "United Hacks V7",
  description: "The world's largest online student-led hackathon. Join participants from around the world for an epic weekend of building and learning.",
  icons: {
    icon: "/favihavy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B6D6TRH654" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B6D6TRH654');
            `,
          }}
        />
        <link rel="icon" href="/favihavy.png" type="image/png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Jersey+10&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
