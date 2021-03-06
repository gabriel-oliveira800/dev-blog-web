import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

import style from "./login.module.scss";

import { Logo, VscGithubInverted } from "../components/Icons";
import { AppRoutes, Strings } from "../../core/values";
import { Loading } from "../components/Loading";
import FadeIn from "react-fade-in/lib/FadeIn";

import { ApplicationStore } from "../../core/services/applicationStore";
import { LastestPost, AuthenticatedResponse } from "../../core/models";
import { ApplicationContext } from "../../core/context";
import { api } from "../../core/services/api";

function Login() {
  const [lastestPost, setLastestPost] = useState<LastestPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setUser } = useContext(ApplicationContext);

  const navigation = useHistory();
  const alert = useAlert();

  useEffect(() => {
    async function loadLastestPost() {
      const response = await api.get<LastestPost[]>("/feed/latest");
      setLastestPost(response.data.slice(0, 3));
    }

    loadLastestPost();
  }, []);

  async function singIn(githubCode: string) {
    setIsLoading(true);

    try {
      const response = await api.post<AuthenticatedResponse>("/authenticate", {
        code: githubCode,
      });

      setUser(response.data.user);
      ApplicationStore.saveToken(response.data.token);

      navigation.push(AppRoutes.home);
    } catch (_) {
      alert.show({
        type: "error",
        message: "Erro na conmunição com GitHub, por favor tente novamente",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGitHubCode = url.includes(Strings.splitGitHubCode);

    if (hasGitHubCode) {
      const [urlWithoutCode, githubCode] = url.split(Strings.splitGitHubCode);
      window.history.replaceState({}, "", urlWithoutCode);

      singIn(githubCode);
    }
  }, []);

  return (
    <div className={style.contentWrapper}>
      <div className={style.messageWrapper}>
        <Logo />

        <ul className={style.messageList}>
          {lastestPost.map((post) => {
            return (
              <FadeIn key={post.id} className={style.message}>
                <p className={style.messageContent}>{post.message}</p>
                <div className={style.messageUser}>
                  <div className={style.userImage}>
                    <img src={post.user.avatar_url} alt={post.user.name} />
                  </div>
                  <span>{post.user.name}</span>
                </div>
              </FadeIn>
            );
          })}
        </ul>
      </div>

      <FadeIn className={style.LoginBoxWrapper}>
        <strong>Entre e compartilhe sua mensagem</strong>

        <a href={Strings.redirectLinkToLoginWithGitHub}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <VscGithubInverted size="24" />
              Entra com github
            </>
          )}
        </a>
      </FadeIn>
    </div>
  );
}

export { Login };
