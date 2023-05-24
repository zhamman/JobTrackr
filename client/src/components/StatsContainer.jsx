import StatItem from "./StatItem";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/StatsContainer";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending application",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#2b2b2b",
      bcg: "#dad8d7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#0f7c2b",
      bcg: "#ddefe1",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d00101",
      bcg: "#f0d5d5",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
