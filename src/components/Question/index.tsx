import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CyberButton from "../atoms/CyberButton";
import ScoreTracker from "../molecules/ScoreTracker";

import { useQuestion } from "../../context/QuestionProvider";

import { QUESTIONS } from "../../store-data";

const StyledScoreTracker = styled(ScoreTracker)`
  margin-top: 0.2rem;
`;

const StyledHeader = styled.h1`
  color: azure;
  font-size: 40px;
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5 1rem;
`;

const StyledCyberButton = styled(CyberButton)`
  margin-top: 2rem;
`;

const StyledLabel = styled.label`
  color: azure;
  display: flex;
  background: black;
  padding: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  flex-grow: 1;
  :hover {
    background: #22edfc;
    color: black;
  }
`;

const StyledInput = styled.input`
  display: block;
`;

const StyledDiv = styled.div`
  margin-left: 1rem;
`;

const Question = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const {
    currentQuestionNum,
    setIsAnswerCorrect,
    setCorrectAnswersNum,
    correctAnswersNum,
  } = useQuestion();

  const currentQuestion = QUESTIONS[currentQuestionNum];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here I make the assumption that the question is always found
    // for simplicity sake
    const foundAnswer = currentQuestion.answers.find(
      (answer) => answer.name === value
    ) || {isCorrect: false};
    

    if (foundAnswer.isCorrect) {
      setCorrectAnswersNum(correctAnswersNum + 1);
    }

    setIsAnswerCorrect(foundAnswer?.isCorrect);
    navigate("/feedback");
  };
  
  return (
    <div>
      <StyledScoreTracker />
      <div>
        <StyledHeader>{currentQuestion.question}</StyledHeader>
      </div>
      <StyledParagraph>Pick an answer below: </StyledParagraph>
      <StyledForm onSubmit={handleSubmit}>
        {currentQuestion.answers.map((answer, index) => {
          return (
            <StyledLabel key={`${answer.name}-${index}`}>
              <StyledInput
                type="radio"
                id={answer.name}
                name={currentQuestion.question}
                value={answer.name}
                onChange={(e) => setValue(e.target.value)}
                key={`${answer.name}-${index}`}
                required
              />
              <StyledDiv>{answer.name}</StyledDiv>
            </StyledLabel>
          );
        })}
        <StyledCyberButton buttonText={"Submit"} />
      </StyledForm>
    </div>
  );
}

export default Question;
