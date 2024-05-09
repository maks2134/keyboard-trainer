import styles from "./KeyboardSection.module.scss";
import {useState} from "react";

export default function Keyboard(words: object[]) {
    const [content, setContent] = useState("");

    const handleInput = (event) => {
        setContent(event.target.textContent);
    };

    let placeholderText = "";
    words.words.forEach((word) => {
        placeholderText += word;
        placeholderText += " ";
    });

    return (
        <div contentEditable={true} onInput={handleInput} className={styles.KeyBoard__section}>
            {placeholderText}

        </div>
    );
}