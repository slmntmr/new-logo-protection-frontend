import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="app-body"> {/* ✅ Fazladan boşlukları önlemek için class ekledik */}
        <>
          <Navbar />
          <main style={{ minHeight: "80vh", padding: "20px" }}>
            {children}
          </main>
          <Footer />
        </>
      </body>
    </html>
  );
}
