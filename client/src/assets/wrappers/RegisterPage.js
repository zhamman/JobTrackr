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
  .member-center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
    cursor: pointer;
    color: var(--dark-green);
    background: var(--golden);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
  }
  .member-center:hover {
    color: var(--white);
  }
`;
export default Wrapper;
