import styled from "styled-components";

import { useQuestion } from "../../../context/QuestionProvider";
import { QUESTIONS } from "../../../store-data";

const NodeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const Node = styled.div`
  cursor: not-allowed;
  border: 2px solid
    ${({ isCurrentQuestion }) => (isCurrentQuestion ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.8rem;
  height: 3.8rem;

  background: ${({ isCurrentQuestion, seenBefore }) =>
    isCurrentQuestion || seenBefore ? "rgb(253 238 6)" : "none"};
  color: ${({ isCurrentQuestion, seenBefore }) =>
    isCurrentQuestion || seenBefore ? "black" : "white"};
  border-radius: 50%;
  opacity: ${({ seenBefore }) => (seenBefore ? "0.5" : "none")};
`;

const LineConnector = styled.div`
  border: 1px solid white;
  background: white;
  height: 1px;
  width: 1rem;
`;

interface QuestionNodeProps {
  children: number;
}

const QuestionNode = ({ children }: QuestionNodeProps) => {
  const { currentQuestionNum } = useQuestion();
  const lastQuestion = QUESTIONS.length;
  const isLastNode = children === lastQuestion;
  const isCurrentQuestion = children === currentQuestionNum + 1;
  const seenBefore = currentQuestionNum + 1 > children;

  return (
    <NodeContainer>
      <Node isCurrentQuestion={isCurrentQuestion} seenBefore={seenBefore}>
        {children}
      </Node>
      {!isLastNode && <LineConnector />}
    </NodeContainer>
  );
}
export default QuestionNode;
