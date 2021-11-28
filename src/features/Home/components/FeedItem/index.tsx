import { useEffect, useState } from "react";
import style from "./feed.module.scss";

import {
  MdThumbUp,
  BiLike,
  IoHeart,
  IoHeartOutline,
} from "../../../components/Icons";

import { UserAvatar } from "../../../components/UserAvatar";
import { Carrosel } from "../../../components/Carrosel";
import { VscClose } from "../../../components/Icons";

import { Helpers } from "../../../../core/helpers";
import { Feed, User } from "../../../../core/models";
import { FavoritesService } from "../../../../core/services/favorites_service";

interface FeedItemProps {
  feed: Feed;
  currentUser: User;
  // setLike: (feed: Feed) => void;
  // saveFeed: (feed: Feed) => void;
  updateLike: (id: string) => void;
  deleteFeed: (id: string, endPoint: string) => void;
}

function FeedItem({
  feed,
  currentUser,
  deleteFeed,
  updateLike,
}: FeedItemProps) {
  const [likes, setLikes] = useState<number>(0);
  const [isFavorite, setisFavorite] = useState<boolean>(false);
  const [canDeleteFeed, setCanDeleteFeed] = useState<boolean>(false);

  useEffect(() => {
    setLikes(feed.Like.length);
    setisFavorite(FavoritesService.isFavorite(feed));
    setCanDeleteFeed(Helpers.canDeleteFeed(feed, currentUser));
  }, [feed]);

  const handleDleeteFeed = () => {
    if (Helpers.isMyFeed(feed, currentUser)) {
      deleteFeed(feed.id, `/feed/${feed.id}`);
    } else {
      deleteFeed(feed.id, `/admin/feed/${feed.userId}/${feed.id}`);
    }
  };

  const handleUpdateLike = () => {
    setLikes(likes + 1);
    updateLike(feed.id);
  };

  const handleSaveFeed = () => {
    FavoritesService.saveFavorites(feed);
    setisFavorite(FavoritesService.isFavorite(feed));
  };

  return (
    <div className={style.feedItemWrapper}>
      <header className={style.profileWrapper}>
        <div className={style.profile}>
          <UserAvatar
            width={60}
            height={60}
            alt={feed.user.name}
            src={feed.user.avatar_url}
          />
          <span>{feed.user.name}</span>
        </div>

        {canDeleteFeed ? (
          <div className={style.deletFeed} onClick={handleDleeteFeed}>
            <VscClose size={34} />
          </div>
        ) : null}
      </header>

      {Helpers.isEmpty(feed.message) ? (
        <></>
      ) : (
        <p className={style.feedMessage}>{feed.message}</p>
      )}

      {Helpers.isEmpty(feed.images) ? (
        <></>
      ) : (
        <div className={style.feedImages}>
          <Carrosel preview={feed.images} formatUrl={Helpers.formatUrl} />
        </div>
      )}

      <div className={style.divider}></div>

      <div className={style.footerWrapper}>
        <div className={style.footerButton} onClick={handleUpdateLike}>
          {likes > 0 ? (
            <MdThumbUp size={30} color="var(--yellow-color)" />
          ) : (
            <BiLike size={30} />
          )}
          <span>{Helpers.countLikes(likes)}</span>
        </div>
        <div className={style.footerButton} onClick={handleSaveFeed}>
          {isFavorite ? (
            <>
              <IoHeart size={30} color="var(--yellow-color)" />
              <span>Remover</span>
            </>
          ) : (
            <>
              <IoHeartOutline size={30} />
              <span>Salvar</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { FeedItem };
