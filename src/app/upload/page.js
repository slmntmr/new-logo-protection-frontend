import FileUploadForm from "@/components/form/FileUploadForm"; // ✅ Form bileşenini çağırdık.

export default function UploadPage() {
  return (
    <div>
      <FileUploadForm /> {/* ✅ Burada bileşeni çağırıyoruz. */}
    </div>
  );
}
