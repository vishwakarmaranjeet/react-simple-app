import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "abc",
    lastName: "Test",
  });

  const changeName = () => {
    setUser({
      ...user,
      firstName: "cba",
      lastName: "Test",
    });
  };
  return (
    <UserContext.Provider value={[user, changeName]}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
