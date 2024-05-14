import stylesTitle from "@/styles/Title.module.css";

export default function Title({ textArray }) {
  return (
    <h1 className={stylesTitle.title}>
      {textArray[0] || null}
      <span className={stylesTitle.titleBlock}>
        {textArray[1] || null}{" "}
        <span className={stylesTitle.titleColor}>{textArray[2] || null}</span>
        <span className={stylesTitle.titleBlock}>{textArray[3] || null}</span>
      </span>
    </h1>
  );
}
