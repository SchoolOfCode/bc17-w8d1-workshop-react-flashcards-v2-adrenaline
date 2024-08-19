import './App.css'
import Header from './Components/Header/header.jsx'
import Flashcards from './Components/Flashcards/flashcards.jsx'
import Footer from './Components/Footer/footer.jsx'
import Form from './Components/Form/form.jsx'
import { useState } from 'react';

function App() {

  const [flashcards, setFlashcards] = useState([
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is a component?', answer: 'A reusable piece of code that defines part of the UI.' },
    { question: 'What is a component?', answer: 'A reusable piece of code that defines part of the UI.' },
  ]);

  return (
    <>
      <Header />
      <Form />
      <Flashcards flashcards={flashcards} />
      <Footer />
    </>
  )
}

export default App