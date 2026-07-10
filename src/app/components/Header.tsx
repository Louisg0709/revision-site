import styles from "./Header.module.css"

import { Geist_Mono } from "next/font/google"
const geist_mono = Geist_Mono({weight: ["600"], subsets: ["latin"]})

export function Header(){
    return(
        <header className={styles.header}>
            <h1 className={`${geist_mono.className} ${styles.title}`}>Revision Website</h1>
        </header>
    )
}
