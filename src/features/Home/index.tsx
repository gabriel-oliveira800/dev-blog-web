import { useContext, useEffect, useState } from "react";
import style from "./home.module.scss";

import { ApplicationContext } from "../../core/context";

import { HomeHeader } from "./components/HomeHeader";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../core/values";

function Home() {
  const { user } = useContext(ApplicationContext);

  const navigate = useHistory();
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const handleNavigateToProfile = () => {
    navigate.push(AppRoutes.profile);
  };

  const handlenavigateToCreateFeed = () => {
    navigate.push(AppRoutes.createFeed);
  };

  useEffect(() => {
    console.log("searchValue", searchValue);
  }, [searchValue]);

  return (
    <main className={style.homeWrapper}>
      <HomeHeader
        avatar={user?.avatar_url}
        navigateToProfile={handleNavigateToProfile}
        navigateToCreateFeed={handlenavigateToCreateFeed}
        onChanged={(e) => setSearchValue(e.target.value)}
      />
      <div></div>
    </main>
  );
}

export { Home };
