import "./globals.css";
import { Barlow } from "next/font/google";
import Head from "next/head";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata = {
  title: "Taimur Tanveer | Andriod Developer",
  description:
    "Senior Android Developer: Transforming complex problems into elegant solutions. Embracing the art of programming to shape innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="./favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <html lang="en" className="scroll-smooth hover:scroll-auto">
        <body className={barlow.className}>{children}</body>
      </html>
    </>
  );
}
