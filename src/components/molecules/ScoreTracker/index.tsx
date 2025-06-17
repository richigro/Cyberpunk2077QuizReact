import styled from "styled-components";

import { useQuestion } from "../../../context/QuestionProvider";
import { QUESTIONS } from "../../../store-data";

const TrackerContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Section1 = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Section2 = styled(Section1)`
  flex-grow: 0;
`;

const StyledNumber = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0.5rem;
`;

interface ScoreTrackerProps {
  className: string;
}

const ScoreTracker = ({ className }: ScoreTrackerProps) => {
  const { currentQuestionNum, correctAnswersNum } = useQuestion();

  return (
    <TrackerContainer className={className}>
      <Section1>
        Question <StyledNumber>{currentQuestionNum + 1}</StyledNumber> out of{" "}
        <StyledNumber>{QUESTIONS.length}</StyledNumber>
      </Section1>
      <Section2>
        Correct answers: <StyledNumber>{correctAnswersNum}</StyledNumber>
      </Section2>
    </TrackerContainer>
  );
}

export default ScoreTracker;
