import { HTMLAttributes, useEffect, useState } from "react";
import style from "./style.module.scss";

import "swiper/css/scrollbar";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Mousewheel } from "swiper";

SwiperCore.use([Scrollbar, Mousewheel]);

interface CarroselProps extends HTMLAttributes<HTMLDivElement> {
  preview: string[];
}

function Carrosel({ preview, ...rest }: CarroselProps) {
  const [step, setStep] = useState<number>(0);

  return (
    <div {...rest} className={style.carroselWrapper}>
      <Swiper
        mousewheel={true}
        className={style.carroselContent}
        onSlideChange={(swiper) => setStep(swiper.activeIndex)}
      >
        {preview.map((image, index) => {
          return (
            <SwiperSlide key={index} className={style.carroselItem}>
              <img src={image} alt={`Feed ${index}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ul className={style.carroselSteps}>
        {preview.map((_image, index) => {
          return (
            <li
              key={index}
              className={
                index === step
                  ? style.carroselStepItem
                  : style.carroselStepItemDisabled
              }
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export { Carrosel };
