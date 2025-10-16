import { createContext, ReactNode, useState } from "react";

type SoundContextType = {
  soundActive: boolean;
  setSoundActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SoundContext = createContext<SoundContextType>({
  soundActive: true,
  setSoundActive: () => {},
});

interface ContextProps {
  children: ReactNode;
}

const SoundProvider = ({ children }: ContextProps) => {
  const [soundActive, setSoundActive] = useState<boolean>(true);

  return (
    <SoundContext.Provider
      value={{
        soundActive,
        setSoundActive
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export { SoundProvider, SoundContext };
