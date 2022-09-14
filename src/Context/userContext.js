import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [isToogle, setIsToogle] = useState(false);

  const [user, setUser] = useState({
    firstName: "Leanne",
    lastName: "Graham",
    email: "sincere@april.biz",
  });

  const updateDetails = () => {
    setIsToogle(!isToogle);
    if (!isToogle) {
      setUser({
        ...user,
        firstName: "Ervin",
        lastName: "Howell",
        email: "shanna@melissa.tv",
      });
    } else {
      setUser({
        ...user,
        firstName: "Leanne",
        lastName: "Graham",
        email: "sincere@april.biz",
      });
    }
  };

  return (
    <UserContext.Provider value={[user, updateDetails]}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
