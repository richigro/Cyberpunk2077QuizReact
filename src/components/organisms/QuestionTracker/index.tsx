import styled from "styled-components";

import QuestionNode from "../../atoms/QuestionNode";
import { IQuestion } from "../../../types";

import { QUESTIONS } from "../../../store-data";

const QuestionTrackerContainer = styled.div`
  display: flex;
`;

const QuestionTracker = () => {
  return (
    <QuestionTrackerContainer>
      {QUESTIONS.map((question: IQuestion, index: number) => {
        return (
          <QuestionNode key={`${question.question}-${index}`}>
            {index + 1}
          </QuestionNode>
        );
      })}
    </QuestionTrackerContainer>
  );
}

export default QuestionTracker;
