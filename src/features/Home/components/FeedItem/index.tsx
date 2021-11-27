import style from "./feed.module.scss";

import {
  VscClose,
  IoHeart,
  MdThumbUp,
  IoHeartOutline,
  BiLike,
} from "../../../components/Icons";

import { UserAvatar } from "../../../components/UserAvatar";
import { Carrosel } from "../../../components/Carrosel";

import { Helpers } from "../../../../core/helpers";
import { Feed } from "../../../../core/models";

interface FeedItemProps {
  feed: Feed;
}

function FeedItem({ feed }: FeedItemProps) {
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

        <div className={style.deletFeed}>
          <VscClose size={34} />
        </div>
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
          <BiLike size={30} /> <span>28 Likes</span>
        </div>
        <div className={style.footerButton}>
          <IoHeartOutline size={30} /> <span>Salvar</span>
        </div>
      </div>
    </div>
  );
}

export { FeedItem };
