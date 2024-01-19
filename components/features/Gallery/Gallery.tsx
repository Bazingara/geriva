import Image, { ImageProps } from "next/image"
import { useState } from "react"

import clsx from "clsx"
import { Carousel, CarouselProps } from "flowbite-react"

export interface GalleryProps {
  carouselProps?: CarouselProps
  className?: string
  images: ImageProps[]
  slideClassName?: string
}

export const Gallery = ({
  carouselProps,
  className,
  images,
  slideClassName,
}: GalleryProps) => {
  const [slide, setSlide] = useState(true)

  return (
    <div className={clsx("relative", className)}>
      <Carousel
        indicators={false}
        slide={slide}
        slideInterval={5000}
        theme={{
          root: { base: "bg-slate-300" },
          scrollContainer: { snap: "rounded-none" },
        }}
        onMouseEnter={() => setSlide(prevState => !prevState)}
        onMouseLeave={() => setSlide(prevState => !prevState)}
        {...carouselProps}
      >
        {images.map(({ alt, src, ...props }) => (
          <div
            key={alt}
            className={`relative h-full max-h-[35vh] min-h-96 w-full sm:max-h-[48rem] ${slideClassName}`}
          >
            <Image
              fill
              alt={alt}
              className="!relative object-cover object-center"
              src={src}
              {...props}
            />
            <div className="absolute bottom-4 w-full sm:bottom-8">
              <div className="grid">
                <span className="place-self-center rounded-3xl bg-white/80 px-4 py-2 text-xs font-semibold uppercase text-slate-500 sm:text-sm">
                  {alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
