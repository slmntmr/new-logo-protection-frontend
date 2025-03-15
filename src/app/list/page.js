"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListPage() {
  const [logos, setLogos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/logos/list");
        setLogos(response.data);
      } catch (error) {
        setMessage("Logolar listelenirken hata oluştu!");
      }
    };

    fetchLogos();
  }, []);

  return (
    <div>
      <h1>Yüklenen Logolar</h1>
      {message && <p>{message}</p>}
      <ul>
        {logos.map((logo, index) => (
          <li key={index}>{logo}</li>
        ))}
      </ul>
    </div>
  );
}
