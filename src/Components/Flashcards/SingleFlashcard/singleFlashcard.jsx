import styles from './singleFlashcard.module.css'

export default function SingleFlashcard({ question, answer }) {
    return (
        <div className={styles.card}>
            <span className={styles.emoji}>❓</span>
            <h1 className={styles.question}>{question}</h1>
            <p className={styles.answer}>{answer}</p>
        </div>
    )
}