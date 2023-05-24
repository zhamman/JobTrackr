import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 10px 10px -10px rgba(0, 0, 0, 0.1);
  //box-shadow: rgba(17, 12, 46, 0.15) 0px 1px 10px 0px;
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .new-logo {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
    h1 {
      margin-bottom: 0;
      margin-right: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--dark-green);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--beige);
  .btn-container {
    position: relative;
    svg {
      color: var(--grey);
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);

    color: var(--grey);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--dark-green);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--grey);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .new-logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
