import { useState } from "react";
import { useAlert } from "react-alert";

import style from "./settings.module.scss";

import { RoundedButton } from "../../../components/RoundedButton";
import { Logo, VscClose } from "../../../components/Icons";
import { api } from "../../../../core/services/api";
import { User, Role } from "../../../../core/models";

interface SettingsProps {
  isAdmin: boolean;
  isVisibled: boolean;
  onClosed: () => void;
  updateUser: (user: User) => void;
}

function Settings({
  isVisibled,
  isAdmin,
  updateUser,
  onClosed,
}: SettingsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const alert = useAlert();

  async function handleUpdateRole() {
    setIsLoading(true);

    try {
      const response = await api.put<User>("/roles", {
        role: isAdmin ? Role.USER : Role.ADMIN,
      });

      updateUser(response.data);

      alert.show({
        type: "success",
        message: `Você agora ${isAdmin ? "não é mais" : "é"} um Moderador`,
      });
      onClosed();
    } catch (e) {
      alert.show({
        type: "error",
        message: "Erro na atualização de acesso, por favor tente novamente",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main
      className={style.settingsWrapper}
      style={{
        display: isVisibled ? "flex" : "none",
      }}
    >
      <div className={style.settingsContent}>
        <Logo />

        <div className={style.settingInfo}>
          <p>
            Sua permisão atual é <span>COMMOM_ACESS</span>, podendo apenas
            criar, editar e remover suas proprias publicações, além de curti e
            adicinar coméntarios em outras publicações. Ativando o{" "}
            <span>MODERATOR</span>, você será poderá remover ou editar
            publicações de outros usuários.
          </p>
          <p>
            * Sua conta passará por uma avaliação antes de atividar a permissão
            de <span>MODERATOR</span>, tempor máximo de 3 dias úteis.
          </p>
        </div>

        <RoundedButton
          isLoading={isLoading}
          onClick={handleUpdateRole}
          label={isAdmin ? "Revogar" : "Atualizar"}
        />

        <div className={style.closedButton} onClick={onClosed}>
          <VscClose size={48} />
        </div>
      </div>
    </main>
  );
}

export { Settings };
