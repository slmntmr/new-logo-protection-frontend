import LogoListForm from "@/components/logoList/LogoListForm";
import styles from "@/styles/logoList.module.css";

export default function LogoListPage() {
  return (
    <div className={styles["page-container"]}>
      <LogoListForm />
    </div>
  );
}
