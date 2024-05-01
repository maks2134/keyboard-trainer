import Container from "../../shared/Container/Container.tsx";
import styles from './Header.module.scss'


export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__body}>
                    <img src="/icon.svg" alt="icon"/>
                    <h1 className={styles.header__promo}>maximtype</h1>
                </div>
            </Container>
        </header>
    )
}