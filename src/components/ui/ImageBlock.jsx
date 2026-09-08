import Image from "next/image";

export default function ImageBlock({ src, caption, alt, id, placeholderNote, preload = false }) {
  return (
    <figure id={id} className="flex flex-col gap-10 scroll-mt-120 xl:gap-15">
      <Image
        src={src}
        alt={alt ?? caption}
        preload={preload}
        sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)"
        decoding="async"
        className="w-full object-cover" 
      />
      <figcaption className="text-center text-body-b7 md:text-body-b6 xl:text-body-b4 text-bw6">
        {caption}
        {placeholderNote && <span className="block">Placeholder image. {placeholderNote}</span>}
      </figcaption>
    </figure>
  );
}
