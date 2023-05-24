import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import { FaPhoenixFramework } from "react-icons/fa";

const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <div className="new-logo">
              <FaPhoenixFramework />
              <h1>JobTrackr</h1>
            </div>
          </header>
          <NavLinks toggleSidebar={showSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
