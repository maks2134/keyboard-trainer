import styles from "./KeyboardSection.module.scss";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";

interface KeyboardProps {
    words: string[];
    onResetInput?: () => void;
}

const Keyboard = forwardRef(({ words, onResetInput }: KeyboardProps, ref: any) => {
    const [currentInput, setCurrentInput] = useState("");
    const [targetText, setTargetText] = useState(words.join(" "));
    const contentEditableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTargetText(words.join(" "));
    }, [words]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const { key } = event;

        // Allow backspace and delete
        if (key === "Backspace" || key === "Delete") {
            setCurrentInput(currentInput.slice(0, -1));
            return;
        }

        // Check if the input matches the target text
        const nextInput = currentInput + key;
        if (targetText.startsWith(nextInput)) {
            setCurrentInput(nextInput);
        }

        // Prevent default behavior for all keys
        event.preventDefault();
    };

    useEffect(() => {
        if (contentEditableRef.current) {
            // Highlight text based on correctness
            const correctText = currentInput;
            const incorrectText = targetText.slice(currentInput.length);
            contentEditableRef.current.innerHTML = `
                <span class="${styles.correct}">${correctText}</span>
                <span class="${styles.incorrect}">${incorrectText}</span>
            `;
        }
    }, [currentInput, targetText]);

    // Expose a reset function to the parent via ref
    useImperativeHandle(ref, () => ({
        resetInput: () => setCurrentInput("")
    }));

    return (

            <div
                ref={contentEditableRef}
                contentEditable={true}
                onKeyDown={handleKeyDown}
                className={`${styles.KeyBoard__section} ${styles["KeyBoard__section--input"]}`}
            />
    );
});

export default Keyboard;