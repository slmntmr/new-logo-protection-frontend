import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css"; // ✅ Stilleri ekledik

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="app-body">
        <div className="layout">
          <Navbar /> {/* Üstte sabit Navbar */}
          <main className="content">{children}</main> {/* İçerik alanı */}
          <Footer /> {/* Altta sabit Footer */}
        </div>
      </body>
    </html>
  );
}
