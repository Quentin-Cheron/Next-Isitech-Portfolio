// Fonts

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Styles

import styles from "@/styles/Home.module.css";

// Components

import Content from "@/components/parts/Content";
import Title from "@/components/parts/Title";
import Button from "@/components/parts/Button";
import ImageContent from "@/components/parts/ImageContent";

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Content className="grid">
        <Content>
          <Title textArray={["Hi!", "I'm", "Quentin", "Web Developer"]} />
          <Button title="Contact" className={styles.button} />
        </Content>
        <ImageContent
          src="https://placehold.jp/250x250.png"
          alt="Quentin"
          width={400}
          height={400}
        />
      </Content>
    </main>
  );
}
