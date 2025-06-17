import { createContext, useState, useContext } from "react";

type QuestionContextProps = {
    currentQuestionNum: number;
    setCurrentQuestionNum: React.Dispatch<React.SetStateAction<number>>;
    isAnswerCorrect: boolean;
    setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>;
    correctAnswersNum: number;
    setCorrectAnswersNum: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionContext = createContext<QuestionContextProps | null>(null);

interface QuestionProviderProps {
  children: React.ReactNode;
}

const QuestionProvider = ({children}: QuestionProviderProps) => {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [correctAnswersNum, setCorrectAnswersNum] = useState(0);

  return (
    <QuestionContext.Provider value={{
      currentQuestionNum,
      setCurrentQuestionNum,
      isAnswerCorrect,
      setIsAnswerCorrect,
      correctAnswersNum,
      setCorrectAnswersNum,
      }}>
      {children}
    </QuestionContext.Provider>
    );
}

const useQuestion =  () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestion");
  }
  return context;
}

export { QuestionProvider, useQuestion };
