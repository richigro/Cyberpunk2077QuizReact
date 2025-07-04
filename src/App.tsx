import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/pages/Home";
import Results from "./components/pages/Results";
import QuestionFeedback from "./components/pages/QuestionFeedback";
import Question from "./components/Question";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43rem;
  background: rgba(0, 0, 0, 0.76);
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
`;

const App = () => {
  return (
    <MainPageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question" element={<Question />} />
        <Route path="feedback" element={<QuestionFeedback />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </MainPageContainer>
  );
}

export default App;
