import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import QuestionTracker from "../../organisms/QuestionTracker";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

function Questions() {
  return (
    <StyledContainer>
      <Link to="/questions/question">
        <button>Go to questions(for testing mode)</button>
      </Link>
      <QuestionTracker />
      <Outlet />
    </StyledContainer>
  );
}
export default Questions;
