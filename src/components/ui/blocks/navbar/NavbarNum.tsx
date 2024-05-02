import styles from './Navbar.module.scss'
import {NavNumbers} from "../../../../interfaces/NavNumbers.ts";

export default function NavbarNum({ title}: NavNumbers) {
    return (
        <li className={styles.Navbar__numbers} >
            {title}
        </li>
    )
}