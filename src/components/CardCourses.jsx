import { IconContext } from "react-icons";
import { FaStopwatch, FaRocket } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ icon, title, description, stats, bgColor }) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${bgColor} text-white p-6`}
    >
      <div className="flex justify-center items-center mb-4">
        <IconContext.Provider value={{ className: "text-white h-12 w-12" }}>
          {icon}
        </IconContext.Provider>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="bg-white bg-opacity-20 rounded px-4 py-2">{stats}</div>
        <IoIosArrowForward className="h-6 w-6" />
      </div>
    </div>
  );
};

const CardsContainer = ({ items }) => {
  console.log(items);
  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      {items?.map((item, index) => {
        return <Card key={index} {...item} />;
      })}
    </div>
  );
};

export default CardsContainer;
