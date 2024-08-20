import './App.css'
import Header from './Components/Header/header.jsx'
import Flashcards from './Components/Flashcards/flashcards.jsx'
import Footer from './Components/Footer/footer.jsx'
import Form from './Components/Form/form.jsx'
import { useState } from 'react';
// the above lines of code import the necessary components and stylesheets into the App component

function App() { // the App component is a functional component that returns the JSX for the entire application

  const [flashcards, setFlashcards] = useState([ 
    // setFlashcards is a function that updates the flashcards state, useState is a hook that initializes the state of the flashcards component
    // the flashcards state is initialized with an array of objects that contain the question and answer for each flashcard
    { id: 1, 
      question: 'What is React?', 
      answer: 'A JavaScript library for building user interfaces.' },
    { id: 2,
      question: 'What is a component?', 
      answer: 'A reusable piece of code that defines part of the UI.' },
    { id: 3,
      question: 'What is a hm?', 
      answer: 'A reusable piece of code that defines part of the HM.' },
  ]);

  // Flashcards component is called with the flashcards state as a prop to display the flashcards
  // {flashcards} is used to pass the flashcards state as a prop to the Flashcards component
  // state in React is used to store data that can change over time, and props are used to pass data from parent to child components
  return (
    <>
      <Header />
      <Form setFlashcards={setFlashcards} flashcards={flashcards} />
      <Flashcards flashcards={flashcards} /> 
      <Footer />
    </>
  )
}

export default App