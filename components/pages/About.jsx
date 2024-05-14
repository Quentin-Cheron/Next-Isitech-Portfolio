import ImageContent from "../parts/ImageContent";
import Content from "../parts/Content";

// Styles

import styles from "@/styles/About.module.css";

// Fonts

import { Inter } from "next/font/google";
import Information from "../About/Information";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`${inter.className}`}>
      <Content className="center">
        <h1 className={`${styles.title}`}>À propos de moi</h1>
      </Content>
      <Content className="center">
        <div className="center">
          <ImageContent
            src="https://placehold.jp/250x250.png"
            alt="Quentin"
            width={200}
            height={200}
          />
        </div>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          alias quas magni nobis facere? Eveniet quos optio ut saepe est
          provident in, omnis porro at atque, architecto a beatae labore! Enim
          ullam doloremque adipisci est voluptatibus aspernatur, at
          exercitationem dignissimos a non itaque sunt tenetur deleniti
          possimus, hic eaque ipsum veritatis, ad quasi sed nobis in. Quod sit
          possimus tempora.
        </p>
      </Content>
      <Information />
    </main>
  );
}
