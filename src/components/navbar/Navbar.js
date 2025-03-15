import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#f8f9fa", padding: "10px", textAlign: "center" }}>
      <h2>Logo Koruma Sistemi</h2>
      <div>
        <Link href="/">Ana Sayfa</Link> |
        <Link href="/upload"> Dosya Yükle</Link> |
        <Link href="/verify"> Hash Doğrula</Link> |
        <Link href="/list"> Yüklenen Logolar</Link>
      </div>
    </nav>
  );
};

export default Navbar;
