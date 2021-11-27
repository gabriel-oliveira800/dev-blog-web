import { useContext, useEffect, useState } from "react";
import style from "./home.module.scss";

import { ApplicationContext } from "../../core/context";
import { Feed } from "../../core/models";

import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../core/values";

import { HomeHeader } from "./components/HomeHeader";
import { FeedItem } from "./components/FeedItem";
import { api } from "../../core/services/api";
import { Helpers } from "../../core/helpers";
import { Loading } from "../components/Loading";

function Home() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    async function getAllFeeds() {
      setLoading(true);

      const response = await api.get<Feed[]>("/feeds");
      setFeeds(response.data);

      console.log(response.data);

      setLoading(false);
    }

    getAllFeeds();
  }, []);

  return (
    <main className={style.homeWrapper}>
      <HomeHeader
        avatar={user?.avatar_url}
        navigateToProfile={handleNavigateToProfile}
        navigateToCreateFeed={handlenavigateToCreateFeed}
        onChanged={(e) => setSearchValue(e.target.value)}
      />

      {isLoading ? (
        <div className={style.homeWrapperLoading}>
          <Loading height={120} width={120} />
        </div>
      ) : (
        <section className={style.feedWrapper}>
          {Helpers.isEmpty(feeds) ? (
            <div className={style.feedListEmptyWrapper}>
              Comece agora, há ajudar outros desenvolvedores com suas
              experiências
            </div>
          ) : (
            <ul className={style.feedListWrapper}>
              {feeds.map((feed) => (
                <FeedItem key={feed.id} feed={feed} />
              ))}
            </ul>
          )}

          <div className={style.chatWrapper}>
            Chat para se comunicar com os outros usuários
          </div>
        </section>
      )}
    </main>
  );
}

export { Home };
