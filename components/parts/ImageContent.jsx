import Image from "next/image";
import stylesContent from "@/styles/Content.module.css";

export default function ImageContent({ src, alt, width, height }) {
  return (
    <Image
      className={stylesContent.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
