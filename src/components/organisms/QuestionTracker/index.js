import styled from "styled-components";

import QuestionNode from "../../atoms/QuestionNode";

import { QUESTIONS } from "../../../store-data";

const QuestionTrackerContainer = styled.div`
  display: flex;
`;

function QuestionTracker() {
  return (
    <QuestionTrackerContainer>
      {QUESTIONS.map((question, index) => {
        return (
          <QuestionNode key={`${question.name}-${index}`}>
            {index + 1}
          </QuestionNode>
        );
      })}
    </QuestionTrackerContainer>
  );
}
export default QuestionTracker;
