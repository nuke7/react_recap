import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
const StyledDiv = styled.div`
  width: 150px;
  height: auto;
  margin: auto;
  border: 1px solid blue;
`;

export function Div({ children, ...props }) {
  return (
    <div {...props}>
      {children} {props.content}
    </div>
  );
}
