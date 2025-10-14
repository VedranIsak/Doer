import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
  primaryBackColor: string;
  setPrimaryBackColor: React.Dispatch<React.SetStateAction<string>>;
  secondaryBackColor: string;
  setSecondaryBackColor: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ContextProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ContextProps) => {
  const [primaryBackColor, setPrimaryBackColor] = useState<string>("#6a1a74");
  const [secondaryBackColor, setSecondaryBackColor] =
    useState<string>("#b3206c");

  return (
    <ThemeContext.Provider
      value={{
        primaryBackColor,
        setPrimaryBackColor,
        secondaryBackColor,
        setSecondaryBackColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
