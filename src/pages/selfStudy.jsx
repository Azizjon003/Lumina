import { IconContext } from "react-icons";
import {
  FaLaptopCode,
  FaHeart,
  FaLanguage,
  FaBusinessTime,
  FaUsers,
  FaBook,
  FaPaintBrush,
  FaHammer,
  FaChalkboardTeacher,
} from "react-icons/fa";

// A mapping from category names to their corresponding icons
const categoryIcons = {
  IT: <FaLaptopCode />,
  Health: <FaHeart />,
  Language: <FaLanguage />,
  Business: <FaBusinessTime />,
  Management: <FaUsers />,
  English: <FaBook />,
  PersonalDevelopment: <FaPaintBrush />,
  SalesMarketing: <FaHammer />,
  EngineeringConstruction: <FaChalkboardTeacher />,
};

const Card = ({ category, courses }) => {
  return (
    <div className="bg-[#303030] rounded-lg p-6 flex flex-col items-center text-center shadow-md text-[#c63528] ">
      <IconContext.Provider value={{ size: "3em" }} className=" ">
        {categoryIcons[category]}
      </IconContext.Provider>
      <h3 className="mt-2 font-bold text-[#f0f0f0]">{category}</h3>
      <p className="text-[#f0f0f0]">{courses} Courses →</p>
    </div>
  );
};

const cardData = [
  { category: "IT", courses: "1,011" },
  { category: "Health", courses: "783" },
  { category: "Language", courses: "1,023" },
  { category: "Business", courses: "1,023" },
  { category: "Management", courses: "1,023" },
  { category: "English", courses: "1,023" },
  { category: "PersonalDevelopment", courses: "1,023" },
  { category: "SalesMarketing", courses: "1,023" },
  { category: "EngineeringConstruction", courses: "1,023" },
  // ... Add other categories here
];

const CardsContainer = () => {
  return (
    <div className="bg-[#3e3e3e] p-10">
      <h2 className="text-3xl font-bold text-[#f0f0f0] text-center mb-8">
        Self Study courses Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((data) => (
          <Card
            key={data.category}
            category={data.category}
            courses={data.courses}
          />
        ))}
      </div>
    </div>
  );
};

const SelfStudy = () => {
  return <h1>{<CardsContainer />}</h1>;
};

export default SelfStudy;
