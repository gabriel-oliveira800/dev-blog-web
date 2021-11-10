import { useContext } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../core/context";
import style from "./home.module.scss";

import { AppRoutes } from "../../core/values";

function Home() {
  const { user } = useContext(ApplicationContext);

  return (
    <main className={style.homeWrapper}>
      <h1>Home Component</h1>
      <h1>{user?.name}</h1>
      <h1>{user?.login}</h1>
      <img src={user?.avatar_url} alt={user?.name} />
      <Link to={AppRoutes.profile}>Profile</Link>
    </main>
  );
}

export { Home };
