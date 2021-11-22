import { ChangeEvent, useState } from "react";
import style from "./style.module.scss";

import { Helpers } from "../../../../core/helpers";

const maxLengthImages = 8;

export interface FilesPreview {
  name: string;
  preview: string;
}

interface FeedImagesProps {
  preview: FilesPreview[];
  showError: (message: string) => void;
  removePreview: (index: number) => void;
  setPreview: (file: FilesPreview) => void;
}

function FeedImages({
  showError,
  preview,
  setPreview,
  removePreview,
}: FeedImagesProps) {
  function handleCreatePreviewFile(file: File) {
    const previewURL = URL.createObjectURL(file);
    const newPreview = {
      name: file.name,
      preview: previewURL,
    } as FilesPreview;

    setPreview(newPreview);
  }

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files == null) return;

    if (files.length > maxLengthImages || preview.length >= maxLengthImages) {
      showError(
        `Você só pode fazer upload de no máximo ${maxLengthImages} imagens.`
      );
      return;
    }

    for (const file of files) {
      handleCreatePreviewFile(file);
    }
  };

  return (
    <section className={style.feedImagesWrapper}>
      <div className={style.inputWrapper}>
        <div className={style.inputLabel}>Escolher</div>
        <div className={style.inputFile}>
          {Helpers.lastItem(preview)?.name ?? "Selecione um arquivo"}
        </div>
        <input
          multiple
          type="file"
          accept="image/*"
          onChange={onChangeFile}
          maxLength={maxLengthImages}
        />
      </div>

      <ul className={style.previewWrapper}>
        {preview.map((file, index) => {
          return (
            <li key={index} onClick={() => removePreview(index)}>
              <img src={file.preview} draggable={false} alt={file.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { FeedImages };
