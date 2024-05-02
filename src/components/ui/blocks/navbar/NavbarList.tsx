import styles from './Navbar.module.scss'
import {NavListInterface} from "../../../../interfaces/NavList.ts";

export default function NavbarList({ title, icon }: NavListInterface) {
    return (
        <li className={styles.Navbar__list} >
            <img src={icon} alt="icon" className={styles.Navbar__icon} />
            {title}
        </li>
    )
}