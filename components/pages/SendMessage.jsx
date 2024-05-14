import FormInput from "../parts/FormInput";
import Button from "../parts/Button";

// Styles

import stylesButton from "@/styles/Button.module.css";
import styles from "@/styles/Contact.module.css";

// Fonts

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SendMessage() {
  return (
    <div className={`${styles.sendMessage} ${inter.className}`}>
      <h1 className={styles.title}>Send us a message</h1>
      <div className={styles.groupForm}>
        <FormInput id="name" label="Name" name="name" type="text" required />
        <FormInput
          id="email"
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormInput
          id="subject"
          label="Subject"
          name="subject"
          type="text"
          required
        />
      </div>

      <div className="left">
        <Button className={stylesButton.buttonSubmit} title="Send a Message" />
      </div>
    </div>
  );
}
