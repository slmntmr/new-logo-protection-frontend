import axios from "axios";

const BASE_URL = "https://logoprotection-backend-1.onrender.com/api/logos";

// 📌 Dosya yükleme fonksiyonu
export const uploadLogo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Dosya yüklenirken hata oluştu!");
  }
};

// 📌 Dosya doğrulama fonksiyonu
export const verifyLogo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${BASE_URL}/verify`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Dosya doğrulama sırasında hata oluştu!");
  }
};
