import { createContext, ReactNode, useState } from "react";
import User from "../models/User";
import Settings from "../models/Settings";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextType>({
  user: new User(
    [],
    new Settings(true, "white", "#6a1a74", "#b3206c", false, true, false, [])
  ),
  setUser: () => {},
});

interface ContextProps {
  children: ReactNode;
}

const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User>(
    new User(
      [],
      new Settings(true, "white", "#6a1a74", "#b3206c", false, true, false, [])
    )
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
