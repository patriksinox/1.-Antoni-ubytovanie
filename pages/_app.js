import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/css-atoni.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-16x16.png"
          sizes="16x16"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Ubytovanie Antoni | Apartmán v Tvrdošíne na Orave"
        />
        <meta
          name="description"
          content="Oddychujte v Antoni, súkromnom apartmáne s nádherným výhľadom na Tvrdošín a okolitú prírodu Oravy. Rezervujte si ubytovanie v blízkosti zaujímavých atrakcií za skvelú cenu!"
        />
        <meta name="author" content="Patrik Šubjak" />
        <meta
          name="keywords"
          content="Ubytovanie, Orava, Tvrdošín, rezervácia, dovolenka, apartmán, penzión, relax, lyžovanie, výlety, turistika"
        />

        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ubytovanieantoni.sk/" />
        <meta
          property="og:title"
          content="Ubytovanie Antoni | Apartmán v Tvrdošíne na Orave"
        />
        <meta
          property="og:description"
          content="Ubytovanie Antoni | privátny Apartmán sa nachádza v Tvrdošíne na Orave a ponúka príjemný výhľad na celé mesto. V blízkom okolí sú rôzne zaujímavé atrakcie ktoré sa oplatí vidieť."
        />
        <meta
          property="og:image"
          content="https://ubytovanieantoni.sk/meta-foto.webp"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ubytovanieantoni.sk/" />
        <meta
          property="twitter:title"
          content="Ubytovanie Antoni | Apartmán v Tvrdošíne na Orave"
        />
        <meta
          property="twitter:description"
          content="Ubytovanie Antoni | privátny Apartmán sa nachádza v Tvrdošíne na Orave a ponúka príjemný výhľad na celé mesto. V blízkom okolí sú rôzne zaujímavé atrakcie ktoré sa oplatí vidieť."
        />
        <meta
          property="twitter:image"
          content="https://ubytovanieantoni.sk/meta-foto.webp"
        />
        <title>Ubytovanie Antoni | Apartmán v Tvrdošíne na Orave</title>
      </Head>
      {/* Cookies Script */}
      <Script
        src="//cdn.cookie-script.com/s/e7abf1de4f87df81662cf6268662c28a.js"
        charset="UTF-8"
        type="text/javascript"
      />
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RBKSKNCGD1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {/*  window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-RBKSKNCGD1"); */}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
