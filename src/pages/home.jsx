import { FaStopwatch, FaRocket } from "react-icons/fa";
import HeroSection from "../components/Hero.jsx";
import CardsContainer from "../components/CardCourses.jsx";

function Home() {
  let arr = [
    {
      icon: <FaStopwatch />,
      title: "Self Study",
      description:
        "Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan kurslar. Sohadagi o'zinzgizda mavjud bo'shliqni to'ldiring.",
      stats: "33 ta kurs",
      bgColor: "bg-[#37140f]",
      path: "/self-study",
    },
    {
      icon: <FaRocket />,
      title: "Offline Kurslar ",
      description:
        "Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan kurslar. Sohadagi o'zinzgizda mavjud bo'shliqni to'ldiring.",
      stats: "18 ta kasb",
      bgColor: "bg-gray-800",
      path: "/offline-curses",
    },
    {
      icon: <FaRocket />,
      title: "Online Kurslar",
      description:
        "Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan kurslar. Sohadagi o'zinzgizda mavjud bo'shliqni to'ldiring.",
      stats: "18 ta kasb",
      bgColor: "bg-gray-800",
      path: "/online-curses",
    },
  ];

  return (
    <>
      <HeroSection />
      {<CardsContainer items={arr} />}
    </>
  );
}

export default Home;
