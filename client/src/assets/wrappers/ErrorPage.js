import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    align-self: center;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--golden);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;
