import { useContext, useEffect, useState } from "react";
import style from "./home.module.scss";

import InfiniteScroll from "react-infinite-scroll-component";
import { useAlert } from "react-alert";

import { ApplicationContext } from "../../core/context";
import { Feed, FeedResponse } from "../../core/models";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../core/values";

import { HomeHeader } from "./components/HomeHeader";
import { FeedItem } from "./components/FeedItem";
import { Loading } from "../components/Loading";
import { api } from "../../core/services/api";
import { Helpers } from "../../core/helpers";

function Home() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [_cachedFeedList, _setCachedFeedList] = useState<Feed[]>([]);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { user, fechUser } = useContext(ApplicationContext);
  const navigate = useHistory();
  const alert = useAlert();

  useEffect(() => {
    fechUser();
    getAllFeeds();
  }, []);

  async function getAllFeeds() {
    setLoading(true);

    try {
      const response = await api.get<FeedResponse>("/feeds", {
        params: { page },
      });

      const { feeds, total } = response.data;

      setFeeds(feeds);
      setTotalPage(total);
      _setCachedFeedList(feeds);
    } catch (error) {
      handleShowError("Erro, ao carregar o feed, por favor tente novamente");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (page !== 1) {
      loadMoreFeeds();
    }
  }, [page]);

  async function loadMoreFeeds() {
    try {
      const response = await api.get<FeedResponse>("/feeds", {
        params: { page },
      });

      const { total } = response.data;

      setTotalPage(total);
      const updatedList = [..._cachedFeedList, ...response.data.feeds];

      setFeeds(updatedList);
      _setCachedFeedList(updatedList);
    } catch (_) {}
  }

  useEffect(() => {
    const handleSearch = () => {
      if (Helpers.isNotEmpty(searchValue)) {
        setFeeds(Helpers.searchByName(feeds, searchValue!));
      } else {
        setFeeds(_cachedFeedList);
      }
    };

    handleSearch();
  }, [searchValue]);

  const handleNavigateToProfile = () => {
    navigate.push(AppRoutes.profile);
  };

  const handlenavigateToCreateFeed = () => {
    navigate.push(AppRoutes.createFeed);
  };

  const handleShowError = (message: string) => {
    alert.show({ type: "error", message: message });
  };

  async function handleDeleteFeed(id: string, endPoint: string) {
    try {
      await api.delete(endPoint);

      const copy = feeds;
      const index = copy.findIndex((feed) => feed.id === id);
      copy.splice(index, 1);

      setFeeds([...copy]);
      _setCachedFeedList([...copy]);
    } catch (error) {
      handleShowError("Erro, ao deletar esse feed, por favor tente novamente");
    }
  }

  async function handleUpdateFeedLikes(id: string) {
    try {
      await api.post(`/like/${id}`);
    } catch (_) {}
  }

  const handleChangePage = () => setPage(page + 1);

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
              Não foi enontrado nenhum resultado
            </div>
          ) : (
            <InfiniteScroll
              loader={<Loading />}
              next={handleChangePage}
              dataLength={feeds.length}
              hasMore={page <= totalPage}
              className={style.feedListWrapper}
            >
              {feeds.map((feed) => (
                <FeedItem
                  key={feed.id}
                  feed={feed}
                  currentUser={user!}
                  deleteFeed={handleDeleteFeed}
                  updateLike={handleUpdateFeedLikes}
                />
              ))}
            </InfiniteScroll>
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
