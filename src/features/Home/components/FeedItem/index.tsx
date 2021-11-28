import { useEffect, useState } from "react";
import style from "./feed.module.scss";

import {
  IoHeart,
  MdThumbUp,
  BiLike,
  IoHeartOutline,
} from "../../../components/Icons";

import { UserAvatar } from "../../../components/UserAvatar";
import { Carrosel } from "../../../components/Carrosel";
import { VscClose } from "../../../components/Icons";

import { Helpers } from "../../../../core/helpers";
import { Feed, User } from "../../../../core/models";

interface FeedItemProps {
  feed: Feed;
  currentUser: User;
  // setLike: (feed: Feed) => void;
  // saveFeed: (feed: Feed) => void;
  deleteFeed: (id: string, endPoint: string) => void;
}

function FeedItem({ feed, currentUser, deleteFeed }: FeedItemProps) {
  const [liked, setLiked] = useState(false);
  const [canDeleteFeed, setCanDeleteFeed] = useState(false);

  useEffect(() => {
    setCanDeleteFeed(Helpers.canDeleteFeed(feed, currentUser));
    setLiked(Helpers.isLiked(feed.Like, currentUser.id));
  }, [feed]);

  const handleDleeteFeed = () => {
    if (Helpers.isMyFeed(feed, currentUser)) {
      deleteFeed(feed.id, `/feed/${feed.id}`);
    } else {
      deleteFeed(feed.id, `/admin/feed/${feed.userId}/${feed.id}`);
    }
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
        <div className={style.footerButton}>
          {liked ? (
            <MdThumbUp size={30} color="var(--yellow-color)" />
          ) : (
            <BiLike size={30} />
          )}
          <span>{Helpers.countLikes(feed.Like)}</span>
        </div>
        <div className={style.footerButton}>
          <IoHeartOutline size={30} /> <span>Salvar</span>
        </div>
      </div>
    </div>
  );
}

export { FeedItem };
