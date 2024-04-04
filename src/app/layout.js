import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  openGraph: {
    title: 'Patrick Snowden',
    description: "Pat's Portfolio",
    url: 'https://patricksnowden.com',
    siteName: "Pat's Portfolio",
    images: [
      {
        url: 'https://raw.githubusercontent.com/snowsneakers/read-me-assets/main/logo-small.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://raw.githubusercontent.com/snowsneakers/read-me-assets/main/logo.png',
        width: 1800,
        height: 1600,
        alt: 'Pat logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="max-w-[1150px] min-h-screen max-w-screen mx-auto">
          {children}
        </section>
        {/* <div className="blob-c absolute md:fixed -z-10">
          <div className="shape-blob one w-[400px] h-[300px] sm:w-[550px]"></div>
        </div> */}
      </body>
    </html>
  );
}
