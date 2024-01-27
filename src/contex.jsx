import { createContext, useContext, useState } from "react";
import getStore from "./utils/getStore.js";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
export function UserProvider({ children }) {
  const navigate = useNavigate();

  const [list, setList] = useState(getStore("lists"));
  const [user, setuser] = useState(getStore("users"));
  const [task, setTask] = useState("");
  const [password, setPassword] = useState("");
  const [pr, setPr] = useState("");
  const [store, setStore] = useState("");

  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id);
    setList(newItem);
  };

  const addPage = () => {
    navigate("/magazin/magazin");
  };

  const addPage2 = () => {
    navigate("/magazin");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setuser,
        task,
        setTask,
        password,
        setPassword,
        pr,
        setPr,
        store,
        setStore,
        list,
        setList,
        removeItem,
        addPage,
        addPage2,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(UserContext);
}
