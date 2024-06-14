import styles from './KeyboardSection.module.scss';
import Container from "../../shared/Container/Container.tsx";
import { useGenerate } from "../../../hooks/useGenerate.ts";
import Keyboard from "./Keyboard.tsx";
import { useEffect, useRef } from "react";

export default function KeyboardSection() {
    const { randomWords, generateRandomWords } = useGenerate(30);
    const keyboardRef = useRef<any>(null);

    function Generate(): void {
        generateRandomWords();
        if (keyboardRef.current) {
            keyboardRef.current.resetInput();
        }
    }

    useEffect(() => {
        Generate();
    }, []);

    return (
        <Container>
            <div className={styles.KeyBoard}>
                <Keyboard ref={keyboardRef} words={randomWords} />
                <div>
                    <button onClick={Generate}>Regenerate</button>
                </div>
            </div>
        </Container>
    );
}