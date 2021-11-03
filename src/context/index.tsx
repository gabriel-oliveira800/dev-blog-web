import { createContext, useEffect, useState, ReactNode } from "react";

import { ApplicationStore } from "../services/applicationStore";
import { api, addTokenToHeader } from "../services/api";
import { Strings } from "../values";
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

    console.log(user);

    setUser(user);
  }

  useEffect(() => {
    const token = ApplicationStore.getToken(Strings.token);
    addTokenToHeader(token ?? "");

    if (token) {
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
