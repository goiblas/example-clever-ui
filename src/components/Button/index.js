import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 40px;
  display: inline-flex;
  place-items: center;
  height: 48px;
  border-radius: 4px;
  color: #fff;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  &:hover {
    background-color: red;
  }
`;

export default Button;
