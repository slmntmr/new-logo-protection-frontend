import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css"; // ✅ Stilleri ekledik

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="app-body">
        <Navbar />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
