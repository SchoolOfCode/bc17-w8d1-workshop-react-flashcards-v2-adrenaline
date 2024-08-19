import styles from './Flashcards.module.css'
import SingleFlashcard from './SingleFlashcard/singleFlashcard.jsx'

export default function Flashcards({ flashcards }) {
    return (
        <div className={styles.main}>
            {flashcards.map(flashcard => (
                <SingleFlashcard 
                question={flashcard.question} 
                answer={flashcard.answer} />
            ))}
        </div>
    )
}