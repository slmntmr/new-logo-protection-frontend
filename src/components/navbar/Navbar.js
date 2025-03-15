import Link from "next/link";
import "@/styles/globals.css"; // ✅ Stilleri ekledik

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Logo Koruma Sistemi</h2>
      <div>
        <Link href="/">Ana Sayfa</Link>
        <Link href="/upload">Dosya Yükle</Link>
        <Link href="/verify">Hash Doğrula</Link>
        <Link href="/list">Yüklenen Logolar</Link>
      </div>
    </nav>
  );
}
