import styled from "@emotion/styled";

const Heading = styled.h1`
  font-size: ${({ size }) => `var(--text-${size})`};
  margin: 0 0 1rem;
`;

export default Heading;
