"use client";
import { useState } from "react";
import axios from "axios";
import styles from "@/styles/verify.module.css"; // ✅ CSS dosyasını import ettik

export default function VerifyPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // ✅ Başarı & hata mesajları için

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleVerify = async () => {
    if (!file) {
      setMessage("Lütfen bir dosya seçin!");
      setMessageType("error");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8080/api/logos/verify", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data);
      setMessageType("success");
    } catch (error) {
      setMessage("Dosya doğrulama sırasında hata oluştu!");
      setMessageType("error");
    }
  };

  return (
    <div className={styles["verify-container"]}>
      <h1>Hash Doğrulama</h1>
      <div className={styles["verify-box"]}>
        <input type="file" onChange={handleFileChange} />
        <button className={styles["verify-button"]} onClick={handleVerify}>
          Doğrula
        </button>
      </div>
      {message && (
        <p className={`${styles["verify-message"]} ${messageType === "success" ? styles.success : styles.error}`}>
          {message}
        </p>
      )}
    </div>
  );
}
