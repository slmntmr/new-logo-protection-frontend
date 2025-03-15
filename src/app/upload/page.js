"use client";
import { useState } from "react";
import axios from "axios";
import styles from "@/styles/upload.module.css"; // ✅ CSS modülü doğru şekilde import edildi.

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Başarı & hata mesajları için
  const [fileInfo, setFileInfo] = useState(""); // 📌 Dosya bilgilerini tutacağız

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // 📌 Seçilen dosyanın adını ve boyutunu gösterelim
    if (selectedFile) {
      setFileInfo(`📂 ${selectedFile.name} (${(selectedFile.size / 1024).toFixed(2)} KB)`);
    } else {
      setFileInfo("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Lütfen bir dosya seçin!");
      setMessageType("error");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8080/api/logos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data);
      setMessageType("success");
      setFileInfo(""); // Başarıyla yüklendiğinde dosya bilgisini temizleyelim
    } catch (error) {
      setMessage("Dosya yüklenirken hata oluştu!");
      setMessageType("error");
    }
  };

  return (
    <div className={styles["upload-container"]}>
      <h1>📤 Dosya Yükleme</h1>
      <div className={styles["upload-box"]}>
        <input type="file" onChange={handleFileChange} />
        {fileInfo && <p className={styles["file-info"]}>{fileInfo}</p>} {/* 📌 Seçilen dosya bilgisi */}
        <button className={styles["upload-button"]} onClick={handleUpload}>
          🚀 Yükle
        </button>
      </div>
      {message && (
        <p className={`${styles.upload-message} ${messageType === "success" ? styles.success : styles.error}`}>
          {message}
        </p>
      )}
    </div>
  );
}
