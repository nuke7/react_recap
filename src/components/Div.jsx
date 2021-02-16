import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
const StyledDiv = styled.div`
  width: 150px;
  height: auto;
  margin: auto;
  border: 1px solid blue;
  margin-top: 10px;
`;

export function Div({ children, ...props }) {
  return (
    <StyledDiv {...props}>
      {children} {props.content}
    </StyledDiv>
  );
}
