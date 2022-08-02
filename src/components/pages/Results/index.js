import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CyberButton from "../../atoms/CyberButton";
import ScoreTracker from "../../molecules/ScoreTracker";

import { useQuestion } from "../../../context/QuestionProvider";
import { QUESTIONS } from "../../../store-data";
import FailImage from "../../../images/screen-trauma-team-en.jpg";
import SuccessImage from "../../../images/screen-high-speed-high-stakes-en.jpg";

const ResultContainer = styled.div`
  height: 570px;
  width: 590px;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  color: ${({ hasPassedQuiz }) => (hasPassedQuiz ? "black" : "white")};
`;

const InsideContainer = styled.div`
  background: ${({ hasPassedQuiz }) => (hasPassedQuiz ? "#22edfc" : "#ff003c")};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-size: 44px;
`;

const StyledScoreTracker = styled(ScoreTracker)`
  width: 100%;
  margin: 0;
`;

const ImageContainer = styled.div`
  padding: 0 2rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledParagraph = styled.p`
  font-size: 24px;
`;

const PASSING_PERCENT = 60; // you can pass with a 60% score.

function Results() {
  const {
    correctAnswersNum,
    setCurrentQuestionNum,
    setIsAnswerCorrect,
    setCorrectAnswersNum,
  } = useQuestion();
  const numberOfQuestions = QUESTIONS.length;
  const minCorrectQuestions = Math.ceil(
    (PASSING_PERCENT * numberOfQuestions) / 100
  );
  const isPerfectScore = QUESTIONS.length === correctAnswersNum;
  const hasPassedQuiz = correctAnswersNum >= minCorrectQuestions;
  const resultImage = hasPassedQuiz ? SuccessImage : FailImage;
  const navigate = useNavigate();
  const handleReset = () => {
    // reset all state variable
    setCurrentQuestionNum(0);
    setIsAnswerCorrect(false);
    setCorrectAnswersNum(0);
    // redirect back to the first question
    navigate("/questions/question");
  };

  const retryButtonText = () => {
    return hasPassedQuiz
      ? isPerfectScore
        ? "Perfect Score! (try again)"
        : "Try for perfect score?"
      : "Retry Quiz";
  };

  return (
    <ResultContainer hasPassedQuiz={hasPassedQuiz}>
      <InsideContainer hasPassedQuiz={hasPassedQuiz}>
        <StyledHeader>
          {hasPassedQuiz ? "You Passed the quiz!" : "You failed the quiz"}
        </StyledHeader>
        <StyledScoreTracker />
        <ImageContainer>
          <StyledImage src={resultImage} alt="result-image" />
        </ImageContainer>
        <StyledParagraph>
          You got {correctAnswersNum} correct answers.
        </StyledParagraph>
        <StyledParagraph>
          {hasPassedQuiz ? "Good Job!" : "Better Luck Next Time!"}
        </StyledParagraph>
      </InsideContainer>
      <CyberButton onClick={handleReset} buttonText={retryButtonText()} />
    </ResultContainer>
  );
}
export default Results;
