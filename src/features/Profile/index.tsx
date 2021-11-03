import style from "./profile.module.scss";

import {
  Logo,
  VscSignIn,
  Background,
  VscSettingsGear,
} from "../components/Icons";

import { ApplicationStore } from "../../services/applicationStore";
import { addTokenToHeader } from "../../services/api";
import { AppRoutes, Strings } from "../../values";
import { useHistory } from "react-router-dom";

function Profile() {
  const navigation = useHistory();

  function handleLogout() {
    ApplicationStore.removeToken(Strings.token);
    addTokenToHeader("");

    navigation.push(AppRoutes.login);
  }

  return (
    <main className={style.profileWrapper}>
      <div className={style.leftSide}>
        <section className={style.contentSection}>
          <header>
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
        </section>
      </div>

      <div className={style.backgroundSection}>
        <Background />
      </div>
    </main>
  );
}

export { Profile };
