import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  // border: 1px solid pink;
`;

const StyledHeader = styled.h1`
  font-size: 3.5rem;
  color: white;
`;

const MainTextContainer = styled.div`
  color: white;
  background-color: black;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  ::hover {
    background-color: blue;
  }
`;

const StartButton = styled.button`
  color: black;
  width: 100%;
  background-color: #fdee06;
  border: none;
  font-size: 4rem;
  :hover {
    background: #00f0ff;
  }
`;

const TextSeparator = styled.span`
  display: block;
  margin-bottom: 2rem;
`;

function Home() {
  return (
    <HomeContainer>
      <MainTextContainer>
        <StyledHeader> Cyberpunk2077 Quiz</StyledHeader>
      </MainTextContainer>
      <StyledLink to="/question">
        <StartButton>Start quiz Now</StartButton>
      </StyledLink>
      <MainTextContainer>
        <h2>About the Quiz:</h2>
        <p>
          This quiz was made to test you about the Cyberpunk2077 video game,
          some of its lore and characters.
        </p>
      </MainTextContainer>
      <MainTextContainer>
        <h2>The world of Cyberpunk2077:</h2>
        <p>
          <TextSeparator>
            Cyberpunk 2077 is set in a dystopian metropolis of Night City,
            California. Night City is located south of San Francisco around the
            area of Monterey, CA. During the setting of 2020, it is said to have
            a population of more than five million inhabitants, however the
            number is suspected to be considerably more in 2077.
          </TextSeparator>
          <TextSeparator>
            Following an economic collapse sometime in the early 21st century,
            the United States has to rely on the Mega corporations to survive.
            These corporations deal in a wide range of areas, such as weapons,
            robotics, cybernetics, pharmaceuticals, communications and
            biotechnology and many companies operate above the law.
          </TextSeparator>
          <TextSeparator>
            The game follows the story of V — a hired gun on the rise in Night
            City, the most violent and dangerous metropolis of the
            corporate-ruled future. A robust character creator will allow
            players to choose V’s gender, visual appearance, character class, as
            well as historical background — all of which may influence the shape
            of the game.
          </TextSeparator>
          <span>
            The world is inspired by the works of authors such as William Gibson
            (author of Neuromancer) and Phillip K Dick, whose novel Do Androids
            Dream of Electric Sheep, and subsequent movie adaption Blade Runner
            heavily influenced creator Mike Pondsmith in creating the original
            pen-and-paper RPG.
          </span>
        </p>
      </MainTextContainer>
    </HomeContainer>
  );
}
export default Home;
