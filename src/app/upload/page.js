"use client";
import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Lütfen bir dosya seçin!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8080/api/logos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data);
    } catch (error) {
      setMessage("Dosya yüklenirken hata oluştu!");
    }
  };

  return (
    <div>
      <h1>Dosya Yükleme</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Yükle</button>
      {message && <p>{message}</p>}
    </div>
  );
}
