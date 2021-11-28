import { createContext, useEffect, useState, ReactNode } from "react";

import { ApplicationStore } from "../services/applicationStore";
import { api } from "../services/api";
import { Role, User } from "../models";

interface ApplicationState {
  user?: User;
  fechUser: () => void;
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
    const data = reponse.data;

    setUser(data);
  }

  async function fechUser() {
    if (ApplicationStore.setupToAddTokenInApiClientHeader()) {
      loadingUserInfo();
    }
  }

  useEffect(() => {
    fechUser();
  }, []);

  return (
    <ApplicationContext.Provider value={{ user, setUser, fechUser }}>
      {prosp.children}
    </ApplicationContext.Provider>
  );
}

export { ApplicationProvider, ApplicationContext };
