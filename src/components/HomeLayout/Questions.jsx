'use client';

import { useState } from 'react';

const questions = [
  {
    id: '1',
    question: 'Can I work on a project I started before the hackathon?',
    answer: 'Answer',
  },
  {
    id: '2',
    question: 'What happens if I need help during the hackathon?',
    answer: 'Answer',
  },
  {
    id: '3',
    question: "What happens if I don't have an idea for a project?",
    answer: 'Answer',
  },
  {
    id: '4',
    question: 'Can I join a team or do I have to come with one?',
    answer: 'Answer',
  },
  {
    id: '5',
    question: 'What happens after the hackathon ends',
    answer: 'Answer',
  },
  {
    id: '6',
    question: 'Can I work on a project I started before the hackathon?',
    answer: 'Answer',
  },
];
const Questions = () => {
  const [toggleAnswer, setToggleAnswer] = useState('0');
  const handleToggleAnswer = (id) => {
    toggleAnswer === id ? setToggleAnswer('0') : setToggleAnswer(id);
  };
  return (
    <>
      <ul className="questions">
        {questions.map((q) => (
          <li key={q.id}>
            <div className="question">
              <p>{q.question}</p>
              <span onClick={() => handleToggleAnswer(q.id)}>
                {toggleAnswer === q.id ? '-' : '+'}
              </span>
            </div>
            <div
              className={`${
                toggleAnswer === q.id ? 'h-auto' : 'h-0'
              } overflow-hidden`}
            >
              <p className="py-2 md:py-3">{q.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Questions;
