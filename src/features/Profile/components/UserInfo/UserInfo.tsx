import FadeIn from "react-fade-in";
import { User } from "../../../../core/models";
import { VscGithubInverted } from "../../../components/Icons";
import style from "./info.module.scss";

interface UserInfoProps {
  user?: User;
}

function UserInfo({ user }: UserInfoProps) {
  const backgroundBanner = `https://source.unsplash.com/random?sig=${Math.random()}`;

  return (
    <section className={style.userInfoWrapper}>
      <div className={style.userInfoContent}>
        <div className={style.userInfoBanner}>
          <img src={backgroundBanner} alt="Background Banner" />
        </div>

        <div className={style.informationWrapper}>
          <FadeIn className={style.information}>
            <img src={user?.avatar_url} alt={user?.name} />

            <h1>{user?.name}</h1>
            <div className={style.repoUserCard}>
              <VscGithubInverted size={16} />
              {user?.login}
            </div>
          </FadeIn>
        </div>

        <div className={style.repoStatistics}>
          <FadeIn className={style.statisticsItem} delay={300}>
            <h3>Seguidores</h3>
            <span>{user?.followers}</span>
          </FadeIn>

          <FadeIn className={style.statisticsItem} delay={300}>
            <h3>Repositórios</h3>
            <span>{user?.public_repos}</span>
          </FadeIn>

          <FadeIn className={style.statisticsItem} delay={300}>
            <h3>Seguindo</h3>
            <span>{user?.following}</span>
          </FadeIn>
        </div>
      </div>

      <div className={style.userInfoFollows}>Other Side</div>
    </section>
  );
}

export { UserInfo };
