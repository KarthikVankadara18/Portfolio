import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";


export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact color="#7eadfc" />,
  },
  {
    id: 1,
    tech: "Node JS",
    icon: <FaNode color="#7eadfc" />,
  },
  {
    id: 2,
    tech: "HTML",
    icon: <FaHtml5 color="#7eadfc" />,
  },
  {
    id: 3,
    tech: "CSS",
    icon: <FaCss3Alt color="#7eadfc" />,
  },
  {
    id: 4,
    tech: "Java",
    icon: <FaJava color="#7eadfc" />,
  },

  {
    id: 5,
    tech: "JavaScript",
    icon: <SiJavascript color="#7eadfc" />,
  },
];

export const projectDetails = [
  {
    id: 0,
    project_name: "Women And Child Safety device",
    project_desc:
      "The goal of this project is to develop a web application that functions as a clone of the popular Indian streaming platform, Hotstar. It also have a user-friendly interface that allows users to browse and search for their favorite content easily. The application is designed with a responsive web design approach, ensuring that it works smoothly across all devices, including desktops, laptops, tablets, and mobile devices ",
    tech_stack: ["Arudino", "GPS Tracker", "C++"],
    project_url: "https://github.com/KarthikVankadara18",
  },
  {
    id: 1,
    project_name: "Smart Shopping Basket",
    project_desc:
      "The Smart shopping basket is a  trolley/cart which uses a embedded chip(raspberry pi) with a barcode scanner and a battery to allow users to self egress at the supermarkets. The main theme of the project is to decrease the time consumption in the billing counters at the supermarkets by designing an smart shopping basket which allows users to checkout from the malls and increase the time of Production ",
    tech_stack: ["python", "raspberry pi 3"],
    project_url: "https://github.com/KarthikVankadara18",
    return: false,
  },
];
