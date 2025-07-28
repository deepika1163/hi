/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TakeQuiz() {
  const { courseId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await fetch(`http://localhost:5000/api/quiz/${courseId}`);
      const data = await res.json();
      setQuiz(data);
    };

    fetchQuiz();
  }, [courseId]);

  const handleChange = (qIndex, answer) => {
    setAnswers({ ...answers, [qIndex]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = 0;
    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        count++;
      }
    });
    setScore(count);
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div>
      <h2>Quiz</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((q, index) => (
          <div key={index}>
            <p>{q.questionText}</p>
            {q.options.map((opt, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={opt}
                  onChange={() => handleChange(index, opt)}
                />
                {opt}
              </label>
            ))}
            <hr />
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
      {score !== null && <h3>Your Score: {score}/{quiz.questions.length}</h3>}
    </div>
  );
}

export default TakeQuiz;
*/
/*
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const sampleQuizzes = {
  html101: {
    title: 'HTML Quiz',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
        answer: 0,
      },
      {
        question: 'Which tag is used to define a paragraph?',
        options: ['<p>', '<h1>', '<div>'],
        answer: 0,
      },
      {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<break>', '<br>', '<lb>'],
        answer: 1,
      },
    ],
  },
  css101: {
    title: 'CSS Quiz',
    questions: [
      {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System'],
        answer: 0,
      },
      {
        question: 'Which is the correct CSS syntax?',
        options: ['body:color=black;', '{body;color:black;}', 'body { color: black; }'],
        answer: 2,
      },
      {
        question: 'Which property is used to change the background color?',
        options: ['color', 'background-color', 'bgcolor'],
        answer: 1,
      },
    ],
  },
  // You can add more quizzes for js101, react101, etc.
};

const TakeQuiz = () => {
  const { id } = useParams();
  const quiz = sampleQuizzes[id];

  const [userAnswers, setUserAnswers] = useState(Array(quiz.questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let total = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === quiz.questions[idx].answer) total++;
    });
    setScore(total);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">{quiz.title}</h1>

        {quiz.questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-6">
            <h2 className="font-semibold text-lg mb-2">{qIndex + 1}. {q.question}</h2>
            <div className="space-y-2">
              {q.options.map((opt, optIndex) => (
                <button
                  key={optIndex}
                  onClick={() => handleOptionClick(qIndex, optIndex)}
                  className={`block w-full text-left px-4 py-2 rounded-lg border ${
                    userAnswers[qIndex] === optIndex
                      ? 'bg-indigo-100 border-indigo-500'
                      : 'bg-gray-50 border-gray-300'
                  } hover:bg-indigo-50`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Quiz
          </button>
        ) : (
          <div className="text-center mt-6 text-xl font-bold text-green-700">
            🎉 You scored {score} out of {quiz.questions.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default TakeQuiz;
*/



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TakeQuiz() {
  const { courseId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await fetch(`http://localhost:5000/api/quiz/${courseId}`);
      const data = await res.json();
      setQuiz(data);
    };

    fetchQuiz();
  }, [courseId]);

  const handleChange = (qIndex, answer) => {
    setAnswers({ ...answers, [qIndex]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = 0;
    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        count++;
      }
    });
    setScore(count);
  };

  if (!quiz) return <p className="text-center mt-20 text-lg text-gray-600">Loading quiz...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-slate-300 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">📝 {quiz.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {quiz.questions.map((q, index) => (
            <div key={index} className="border border-slate-300 rounded-xl p-4 bg-slate-300">
              <p className="font-medium text-black mb-3">{index + 1}. {q.questionText}</p>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={opt}
                      checked={answers[index] === opt}
                      onChange={() => handleChange(index, opt)}
                      className="accent-blue-600"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition block mx-auto"
          >
            Submit Quiz
          </button>
        </form>

        {score !== null && (
          <div className="mt-6 text-center text-xl font-bold text-green-700">
            🎉 Your Score: {score} / {quiz.questions.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeQuiz;
