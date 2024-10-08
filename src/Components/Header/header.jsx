import reactLogo from "/src/assets/react.svg"
import styles from './header.module.css'

export default function Header() {

    return (

        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.headerLogo} alt="React logo" />
                </a>
            </div>
            <h1 className={styles.title}>React Flashcards</h1>
            <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
        </>
    )
}