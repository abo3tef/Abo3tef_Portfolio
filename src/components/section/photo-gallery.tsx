/* eslint-disable @next/next/no-img-element */

import BlurFade from "@/components/magicui/blur-fade";

const photos = [
  { src: "/me/me1.jpeg", alt: "Abdallah portrait" },
  { src: "/me/me7.webp", alt: "Abdallah portrait" },
  { src: "/me/me2.webp", alt: "Abdallah portrait" },
  { src: "/me/me3.jpg", alt: "Abdallah portrait" },
  { src: "/me/me4.jpg", alt: "Abdallah portrait" },
  { src: "/me/me6.jpg", alt: "Abdallah portrait" },
];

export default function PhotoGallery() {
  return (
    <section id="photos">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={0.16}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">A few frames of me</h2>
            </div>
            <span className="hidden text-xs text-muted-foreground sm:block">
              01 / {String(photos.length).padStart(2, "0")}
            </span>
          </div>
        </BlurFade>
        <div
          className="photo-gallery"
          data-count={photos.length}
          aria-label="A collection of photos of Abdallah"
        >
          {photos.map((photo, index) => (
            <BlurFade
              key={photo.src}
              delay={0.2 + index * 0.04}
              className="photo-gallery__item"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
