import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./profile.module.scss";

import {
  Logo,
  VscSignIn,
  Background,
  VscSettingsGear,
} from "../components/Icons";

import { ApplicationStore } from "../../core/services/applicationStore";
import { AppRoutes, Strings } from "../../core/values";
import { api } from "../../core/services/api";

import { UserInfo } from "./components/UserInfo/UserInfo";
import { Repositories } from "./components/Repositories";
import { ApplicationContext } from "../../core/context";

import { Follows } from "../../core/models";

function Profile() {
  const [follows, setFollows] = useState<Follows[]>();

  const { user } = useContext(ApplicationContext);
  const navigation = useHistory();

  async function loadFollows() {
    const response = await api.get<Follows[]>("/follows");
    setFollows(response.data);
  }

  useEffect(() => {
    if (ApplicationStore.setupToAddTokenInApiClientHeader()) {
      loadFollows();
    }
  }, []);

  function handleLogout() {
    ApplicationStore.handleLogout();
    navigation.push(AppRoutes.login);
  }

  return (
    <main className={style.profileWrapper}>
      <div className={style.leftSide}>
        <section className={style.contentSection}>
          <header className={style.contentSectionHeader}>
            <Logo />

            <div className={style.actionsButtons}>
              <div onClick={() => {}}>
                <VscSettingsGear size="26" />
              </div>
              <div onClick={handleLogout}>
                <VscSignIn size="26" />
              </div>
            </div>
          </header>

          <UserInfo user={user} follows={follows} />

          <Repositories />
        </section>
      </div>

      <div className={style.backgroundSection}>
        <Background />
      </div>
    </main>
  );
}

export { Profile };
