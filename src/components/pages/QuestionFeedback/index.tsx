import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CyberButton from "../../atoms/CyberButton";
import ScoreTracker from "../../molecules/ScoreTracker";
import QuestionTracker from "../../organisms/QuestionTracker";

import { useQuestion } from "../../../context/QuestionProvider";
import { QUESTIONS } from "../../../store-data";
import RightImage from "../../../images/screen-just-around-the-corner-en.jpg";
import WrongImage from "../../../images/screen-its-a-deal-en.jpg";

const MainFeedbackContainer = styled.div`
  margin: 3.5rem 0;
  height: 570px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeedbackContainer = styled.div`
  background: ${({ isAnswerCorrect }) =>
    isAnswerCorrect ? "#22edfc" : "#ff003c"};
  color: ${({ isAnswerCorrect }) => (isAnswerCorrect ? "black" : "white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  flex-grow: 1;
`;

const StyledHeader = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`;

const StyledScoreTracker = styled(ScoreTracker)`
  width: 100%;
`;

const ImageContainer = styled.div`
  // padding-left: 1rem;
  // padding-right: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

// !! this is currently not working
const StyledCyberButton = styled(CyberButton)`
  margin-top: 0;
  :hover {
    border-top: 1px solid black;
  }
`;

const StyledParagraph = styled.p`
  font-size: 24px;
  margin-top: 0.5rem;
`;

const QuestionFeedback = () => {
  const { currentQuestionNum, setCurrentQuestionNum, isAnswerCorrect } =
    useQuestion();
  const navigate = useNavigate();
  const isLastQuestion = currentQuestionNum + 1 === QUESTIONS.length;
  
  const continueQuiz = () => {
    // dont increase question num if is last question
    if (!isLastQuestion) {
      setCurrentQuestionNum(currentQuestionNum + 1);
    }
    const navigateTo = isLastQuestion ? "/results" : "/question";
    navigate(navigateTo);
  };
  const currentQuestionObj = QUESTIONS[currentQuestionNum] || {question: "Error name", answers: [{isCorrect: false}]};
  
  const correctAnswer = currentQuestionObj?.answers.find(
    (answer) => answer.isCorrect === true
  )?.name || "Error name";

  const imageSource = isAnswerCorrect ? RightImage : WrongImage;

  return (
    <>
      <QuestionTracker />
      <MainFeedbackContainer>
        <FeedbackContainer isAnswerCorrect={isAnswerCorrect}>
          <StyledHeader>
            {isAnswerCorrect ? "You Got It Right!" : "You Got It Wrong"}
          </StyledHeader>
          <StyledScoreTracker />

          <ImageContainer>
            <StyledImage src={imageSource} alt="imagge" />
          </ImageContainer>
          <StyledParagraph>
            The correct answer was: {correctAnswer}.
          </StyledParagraph>
        </FeedbackContainer>
        <StyledCyberButton
          onClick={continueQuiz}
          buttonText={isLastQuestion ? "See results" : "Next Question"}
        />
      </MainFeedbackContainer>
    </>
  );
}

export default QuestionFeedback;
