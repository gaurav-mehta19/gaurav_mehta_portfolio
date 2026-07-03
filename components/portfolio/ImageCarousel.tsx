"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: string[];
  alt: string;
};

const ROTATE_INTERVAL_MS = 4000;

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % count),
      ROTATE_INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  const goTo = (target: number) => setIndex(((target % count) + count) % count);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="carousel-slide">
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 760px) 100vw, 440px"
              className="carousel-img"
              priority={i === 0}
              unoptimized={src.endsWith(".svg")}
            />
          </div>
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-prev"
            aria-label="Previous image"
            onClick={() => goTo(index - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-next"
            aria-label="Next image"
            onClick={() => goTo(index + 1)}
          >
            ›
          </button>
          <div className="carousel-dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`carousel-dot${i === index ? " is-active" : ""}`}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
