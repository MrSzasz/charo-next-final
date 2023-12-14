import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, title = "MERCEDES LLANOS" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Discover the captivating art of Mercedes Llanos, showcasing a stunning array of her original works. Explore the unique style and vision of this talented artist, known for her thought-provoking pieces that evoke emotion and inspire reflection."
        />
        <meta property="og:image" content="https://imgur.com/TdYjZlc.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main className="px-6 md:px-12">{children}</main>
    </>
  );
};

export default Layout;
