import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .new-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    svg {
      font-size: 2rem;
      margin-right: 0.5rem;
    }
    h1 {
      margin-bottom: 0;
      margin-right: 1rem;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--golden);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--golden);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
