import { FaExchangeAlt, FaRecycle } from "react-icons/fa";
import { FaEarthAfrica, FaPeopleGroup, FaRotate } from "react-icons/fa6";

interface WhyData {
  reason: string;
  icon: JSX.Element;
}

export const whyData: WhyData[] = [
  {
    reason: "Trade items directly without money",
    icon: <FaExchangeAlt />,
  },
  {
    reason: "Saving our mother earth",
    icon: <FaEarthAfrica />,
  },
  {
    reason: "Promoting freecycle",
    icon: <FaRotate />,
  },
  {
    reason: "Build Community Connections",
    icon: <FaPeopleGroup />,
  },
  {
    reason: "Reduce waste responsibly",
    icon: <FaRecycle />,
  },
];
