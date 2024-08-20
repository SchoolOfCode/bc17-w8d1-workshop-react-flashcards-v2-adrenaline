import { useState } from 'react';
import styles from './form.module.css';

export default function Form({ flashcards, setFlashcards }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents the default behavior of the form submission event which is to refresh the page
        const newFlashcard = { id: flashcards.length + 1, question, answer };
        setFlashcards([...flashcards, newFlashcard]); // updates the flashcards state with the new flashcard object and ...flashcards which spreads the existing flashcards which means the new flashcard is added to the end of the array
        setQuestion(''); // clears the question input field
        setAnswer('');
    };

    return (
        <>
            <form className={styles.Form} onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="question">Question:</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={handleQuestionChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="answer">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        value={answer}
                        onChange={handleAnswerChange}
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Add
                </button>
            </form>
        </>
    );
}
