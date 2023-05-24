import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    .new-logo {
      display: flex;
      align-items: center;
      margin-bottom: 0;
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
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--golden);
    }
  }
  p {
    color: var(--darker-grey);
  }
  .landing-icon {
    display: none;
    font-size: 12rem;
    margin-left: 40%;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .landing-icon {
      display: block;
    }
  }
`;
export default Wrapper;
