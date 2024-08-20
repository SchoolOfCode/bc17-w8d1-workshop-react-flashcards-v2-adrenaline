import styles from './Flashcards.module.css'
import SingleFlashcard from './SingleFlashcard/singleFlashcard.jsx'

export default function Flashcards({ flashcards }) {
    return (
        <div className={styles.main}>
            {flashcards.map(flashcard => ( // Loop through each flashcard and render it
                <SingleFlashcard
                    key={flashcard.id} // Ensure each flashcard has a unique id
                    question={flashcard.question}
                    answer={flashcard.answer} />
            ))}
        </div>
    );
}