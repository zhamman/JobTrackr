import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--beige);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      //padding-top: 1rem;
      padding-left: 2.5rem;

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
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--green-mid);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--beige);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--dark-green);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--dark-green);
    }
    .active .icon {
      color: var(--dark-green);
    }
  }
`;
export default Wrapper;
