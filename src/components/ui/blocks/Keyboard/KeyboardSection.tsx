import styles from './KeyboardSection.module.scss'
import Container from "../../shared/Container/Container.tsx";
import {useGenerate} from "../../../hooks/useGenerate.ts";
import Keyboard from "./Keyboard.tsx";
import {useEffect} from "react";


export default function KeyboardSection() {
    const {randomWords,generateRandomWords} = useGenerate(30);

    function Generate():void{
    generateRandomWords();
    }

    useEffect(() => {
        Generate();
    }, []);

    return (
        <Container>
            <div className={styles.KeyBoard}>
                <Keyboard words={randomWords} />
                <div>
                <button onClick={Generate}>Regenerate</button>
                </div>
            </div>
        </Container>
    )
}