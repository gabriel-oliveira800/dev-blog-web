import { createContext, useEffect, useState, ReactNode } from "react";

import { ApplicationStore } from "../services/applicationStore";
import { api } from "../services/api";
import { User } from "../models";

interface ApplicationState {
  user?: User;
  setUser: (user: User) => void;
}

const ApplicationContext = createContext({} as ApplicationState);

type ApplicationContextProps = {
  children: ReactNode;
};

function ApplicationProvider(prosp: ApplicationContextProps) {
  const [user, setUser] = useState<User>({} as User);

  async function loadingUserInfo() {
    const reponse = await api.get<User>("/profile");
    const user = reponse.data;

    setUser(user);
  }

  useEffect(() => {
    if (ApplicationStore.setupToAddTokenInApiClientHeader()) {
      loadingUserInfo();
    }
  }, []);

  return (
    <ApplicationContext.Provider value={{ user, setUser }}>
      {prosp.children}
    </ApplicationContext.Provider>
  );
}

export { ApplicationProvider, ApplicationContext };
