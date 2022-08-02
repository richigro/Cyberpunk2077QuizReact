import { createContext, useState, useContext } from "react";

const QuestionContext = createContext();

function QuestionProvider(props) {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [correctAnswersNum, setCorrectAnswersNum] = useState(0);

  const values = {
    currentQuestionNum,
    setCurrentQuestionNum,
    isAnswerCorrect,
    setIsAnswerCorrect,
    correctAnswersNum,
    setCorrectAnswersNum,
  };

  return <QuestionContext.Provider value={values} {...props} />;
}

function useQuestion() {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestion");
  }
  return context;
}

export { QuestionProvider, useQuestion };
