import styles from "@/styles/Content.module.css";

export default function Content({ children, className = "" }) {
  return <div className={`${styles.content} ${className}`}>{children}</div>;
}
