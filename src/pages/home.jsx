import { FaStopwatch } from "react-icons/fa";
import HeroSection from "../components/Hero.jsx";
import CardsContainer from "../components/CardCourses.jsx";

function Home() {
  let arr = [
    {
      icon: <FaStopwatch />,
      title: "Kurslar",
      description:
        "Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan kurslar. Sohadagi o'zinzgizda mavjud bo'shliqni to'ldiring.",
      stats: "33 ta kurs",
      bgColor: "bg-blue-500",
    },
    {
      icon: <FaStopwatch />,
      title: "Kasblar",
      description:
        "Kasbga yo'naltirilgan praktikum kurslari. 0 dan boshlab ishga tayyor bo'lib chiqing.",
      stats: "18 ta kasb",
      bgColor: "bg-gray-800",
    },
    {
      icon: <FaStopwatch />,
      title: "Kasblar",
      description:
        "Kasbga yo'naltirilgan praktikum kurslari. 0 dan boshlab ishga tayyor bo'lib chiqing.",
      stats: "18 ta kasb",
      bgColor: "bg-gray-800",
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
