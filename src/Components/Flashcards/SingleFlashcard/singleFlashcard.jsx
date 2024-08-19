import styles from './singleFlashcard.module.css'

export default function singleFlashcard() {
    return (
        <>
        <div className={styles.card}>
            <span className={styles.emoji}>❓</span>
            <h1 className={styles.question}>What is JSX?</h1>
            <p className={styles.answer}>A HTML like code used in Javascript</p>
        </div>
        </>
    )
}