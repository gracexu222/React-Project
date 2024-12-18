import { useState } from "react";

const SimpleApp = () => {
  const question = [
    {
      questionText: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburge"],
      correctAnswer: "Berlin",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerChange = (event) => {
    setSelectAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectAnswer === question[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }

    setSelectAnswer("");
  };
  return (
    <div>
      <h1>Simple Quiz App</h1>
      {!isQuizFinished ? (
        <div>
          <h2>{question[currentQuestionIndex].questionText}</h2>
          <form>
            {question[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name="answer"
                  value={option}
                  checked={selectAnswer === option}
                  onChange={handleAnswerChange}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </form>
          <button onClick={handleNextQuestion}>Submit</button>
        </div>
      ) : (
        <div>
          <p>
            Quiz Complete! Your score: {score} / {question.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default SimpleApp;
