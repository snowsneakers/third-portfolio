import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Patrick Snowden",
  description: "Check out my portfolio",
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
