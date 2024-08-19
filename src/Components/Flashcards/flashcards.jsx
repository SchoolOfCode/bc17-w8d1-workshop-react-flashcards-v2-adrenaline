import styles from './Flashcards.module.css'
import SingleFlashcard from './SingleFlashcard/singleFlashcard.jsx'

export default function Flashcards() {
    return (
        <>
        <div className={styles.main}>
            <SingleFlashcard />
            <SingleFlashcard />
            <SingleFlashcard />
        </div>
        </>
    )
}