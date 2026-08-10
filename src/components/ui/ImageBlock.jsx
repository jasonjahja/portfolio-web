import Image from "next/image";

export default function ImageBlock({ src, caption }) {
  return (
    <div className="flex flex-col gap-10 xl:gap-15">
      <Image
        src={src}
        alt={caption}
        sizes="(max-width: 767px) calc(100vw - 50px), (max-width: 1279px) calc(100vw - 80px), calc(100vw - 240px)"
        decoding="async"
        className="w-full object-cover" 
      />
      <p className="text-center text-body-b7 md:text-body-b6 xl:text-body-b4 text-bw6">
        {caption}
      </p>
    </div>
  );
}
