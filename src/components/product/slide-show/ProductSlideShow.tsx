"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export function ProductSlideShow({ images, title, className }: Props) {
  return (
    <div className={className}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image) => (
          <SwiperSlide key={title}>
            <Image src={image} alt={title} width={200} height={200} />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
}
