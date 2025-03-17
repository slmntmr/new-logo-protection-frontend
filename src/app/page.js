"use client";
import styles from "@/styles/home.module.css"; // ✅ CSS modülünü import ettik.
import { useRouter } from "next/navigation"; // 🚀 Sayfa yönlendirme için

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles["home-container"]}>
      <h1 className={styles["home-title"]}>Hoş Geldiniz!</h1>
      <p className={styles["home-description"]}>
        Bu sistem, logolarınızı **blokzincir teknolojisiyle koruma altına almak**
        için geliştirilmiştir. Hemen dosyanızı yükleyerek logonuzu güvenceye alın!
      </p>
      <button
        className={styles["protect-button"]}
        onClick={() => router.push("/upload")}
      >
        🚀 Logonuzu Koruyun!
      </button>
    </div>
  );
}
