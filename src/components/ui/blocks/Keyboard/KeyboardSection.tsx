import styles from './KeyboardSection.module.scss'
import Container from "../../shared/Container/Container.tsx";
import {useGenerate} from "../../../hooks/useGenerate.ts";

export default function KeyboardSection() {
    const {randomWords} = useGenerate();

    function print(): void {
        console.log(randomWords);
    }
    return (
        <Container>
            <div className={styles.KeyBoard}>
                <button onClick={print}>ЫФЗАЩЛЗЩФЫАЗЩФЫАЗщ</button>
            </div>
        </Container>
    )
}