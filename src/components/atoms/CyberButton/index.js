import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  height: 3rem;
  width: 100%;
  background: #fdee06;
  font-size: 37px;
  :hover {
    background: #22edfc;
    text-decoration: underline;
  }
`;

function CyberButton({ buttonText, onClick, className }) {
  return (
    <StyledButton className={className} onClick={onClick}>
      {buttonText}
    </StyledButton>
  );
}
export default CyberButton;
