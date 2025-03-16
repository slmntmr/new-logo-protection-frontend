"use client";
import { useEffect, useState } from "react";
import { fetchLogos, getLogoUrl } from "@/services/logoListService";
import styles from "@/styles/logoListForm.module.css";

export default function LogoListForm() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const getLogos = async () => {
      const logoList = await fetchLogos();
      setLogos(logoList);
    };

    getLogos();
  }, []);

  return (
    <div className={styles["logo-list-container"]}>
      <h1>🖼️ Yüklenen Logolar</h1>
      <div className={styles["logo-grid"]}>
        {logos.length > 0 ? (
          logos.map((logo, index) => (
            <div key={index} className={styles["logo-item"]}>
              <img
                src={getLogoUrl(logo)} // ✅ Backend'den gelen her dosya adını kullanarak görsel çağrısı yapıyoruz
                alt={logo}
                className={styles["logo-image"]}
              />
              <p>{logo}</p>
            </div>
          ))
        ) : (
          <p>Henüz yüklenmiş bir logo bulunmuyor.</p>
        )}
      </div>
    </div>
  );
}
