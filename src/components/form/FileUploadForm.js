"use client";
import { useState } from "react";
import { uploadLogo } from "@/services/api"; // ✅ API çağrısını servis dosyasından alıyoruz.
import styles from "@/styles/upload.module.css"; // ✅ Stilleri ekledik.

export default function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [fileInfo, setFileInfo] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

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

    try {
      const response = await uploadLogo(file); // 📌 API çağrısını `api.js` içinden alıyoruz.
      setMessage(response);
      setMessageType("success");
      setFileInfo("");
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    }
  };

  return (
    <div className={styles["upload-container"]}>
      <h1>📤 Dosya Yükleme</h1>
      <div className={styles["upload-box"]}>
        <input type="file" onChange={handleFileChange} />
        {fileInfo && <p className={styles["file-info"]}>{fileInfo}</p>}
        <button className={styles["upload-button"]} onClick={handleUpload}>
          🚀 Yükle
        </button>
      </div>
      {message && (
        <p className={`${styles.uploadMessage} ${messageType === "success" ? styles.success : styles.error}`}>
          {message}
        </p>
      )}
    </div>
  );
}
