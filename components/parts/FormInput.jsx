import React, { useEffect, useState } from "react";

import stylesForm from "@/styles/Contact.module.css";

export default function FormInput({ label, id, name, type, required }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (content.length > 0) {
      document.getElementById(`label${name}`).classList.add(stylesForm.active);
    } else {
      document
        .getElementById(`label${name}`)
        .classList.remove(stylesForm.active);
    }
  }, [content]);

  return (
    <div className={stylesForm.groupInput}>
      <input
        className={stylesForm.input}
        type={type}
        id={id}
        name={name}
        required={required}
        onChange={(e) => setContent(e.target.value)}
      />
      <label id={`label${name}`} className={stylesForm.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
