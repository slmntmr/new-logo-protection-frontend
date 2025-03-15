// 📌 Alt menü bileşeni (Footer)
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#343a40", color: "#fff", padding: "10px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Logo Protection. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;
