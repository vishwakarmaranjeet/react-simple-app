import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "Yash",
    lastName: "Vishwakarma",
  });

  const changeName = () => {
    setUser({
      ...user,
      firstName: "Anshu",
      lastName: "Vishwakarma",
    });
  };
  return (
    <UserContext.Provider value={[user, changeName]}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
