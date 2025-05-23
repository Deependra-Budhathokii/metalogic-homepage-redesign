import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto_Mono, Rajdhani, Poppins, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700'],
})

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-schibsted-grotesk',
  // weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: " Metalogic | Empowering Businesses with Digital Transformation Solutions",
  description: "Discover how Metalogic helps businesses thrive with innovative software solutions, IT consulting, digital transformation services, and cutting-edge technology tailored for a smarter tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* // add favicon  */}
        <link rel="icon" href="/metalogic-favicon.svg" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/metalogic-favicon.svg" sizes="any" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer Logo="/metalogic-favicon.svg" />
        </ThemeProvider>
      </body>
    </html>
  );
}
