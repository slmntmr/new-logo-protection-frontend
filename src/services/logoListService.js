"use client";
import axios from "axios";

const BACKEND_URL = "https://logoprotection-backend-1.onrender.com/api/logos"; // 📌 API adresi

// 📌 Tüm logoların isimlerini getirir
export const fetchLogos = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/list`); // ✅ Tüm logo isimlerini getiriyoruz
    return response.data;
  } catch (error) {
    console.error("Logoları getirirken hata oluştu:", error);
    return [];
  }
};

// 📌 Tek bir logonun URL’sini döndürür
export const getLogoUrl = (fileName) => {
  return `${BACKEND_URL}/${fileName}`;
};
