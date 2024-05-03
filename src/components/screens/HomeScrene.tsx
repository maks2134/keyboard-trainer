import Layout from "../ui/layout/Layout.tsx";
import NavBar from "../ui/blocks/navbar/Navbar.tsx";
import KeyboardSection from "../ui/blocks/Keyboard/KeyboardSection.tsx";


export default function HomeScreen() {
    return (
        <Layout>
            <NavBar/>
            <KeyboardSection/>
        </Layout>
    )
}