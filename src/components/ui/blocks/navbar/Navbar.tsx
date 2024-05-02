import styles from './Navbar.module.scss'
import Container from "../../shared/Container/Container.tsx";
import {navbarItems} from "../../../../utils/navbar.ts";
import {navbarNumbers} from "../../../../utils/navbarNumbers.ts";
import NavbarList from "./NavbarList.tsx";
import NavbarNum from "./NavbarNum.tsx";

export default function NavBar() {
    return (
        <Container>
            <div className={styles.Navbar}>
                {navbarItems.map(navItems => {
                    return <NavbarList {...navItems} key={navItems.title}/>
                })}
                {navbarNumbers.map(navItems => {
                    return <NavbarNum {...navItems} key={navItems.title}/>
                })}
            </div>
        </Container>
    )
}