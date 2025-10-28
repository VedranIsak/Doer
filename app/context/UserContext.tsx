import { createContext, ReactNode, useEffect, useState } from "react";
import User from "../models/User";
import Settings from "../models/Settings";
import { loadUser, remove, saveUser } from "../helpers/dataManager";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextType>({
  user: new User([], new Settings(true, "white", "#6a1a74", "#b3206c", false)),
  setUser: () => {},
});

interface ContextProps {
  children: ReactNode;
}

const UserProvider = ({ children }: ContextProps) => {
  const defaultUser = new User(
    [],
    new Settings(true, "white", "#6a1a74", "#b3206c", false)
  );

  const [user, setUser] = useState<User>(() => defaultUser);

  useEffect(() => {
    async function loadUserOnMount() {
      try {
        const loaded = await loadUser();
        if (loaded) { setUser(loaded); };
      } catch {
        setUser(defaultUser);
        saveUser(user);
      }
    }

    loadUserOnMount();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
