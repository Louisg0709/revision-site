import Link from "next/link"
import styles from "./Header.module.css"

import { Geist_Mono } from "next/font/google"
const geist_mono = Geist_Mono({weight: ["600"], subsets: ["latin"]})

export function Header(){
    return(
        <header className={`${styles.header} ${geist_mono.className}`}>
            <div><h1 className={styles.title}>Revision Website</h1></div> 
            <nav className={styles.nav}>
                <Link href="./" className={styles.link}>Home</Link>
                <Link href="/edit" className={styles.link}>Edit</Link>
                <Link href="/flashcards" className={styles.link}>Flashcards</Link>
                <Link href="/quiz" className={styles.link}>Quiz</Link>
                <Link href="/about" className={styles.link}>About</Link>   
            </nav>
        </header>
    )
}
