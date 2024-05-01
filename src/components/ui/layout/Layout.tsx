import { PropsWithChildren} from "react";
import Header from "./header/Header.tsx";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <div>
            <Header/>
            <main className="main">
                {children}
            </main>

        </div>
    )
}