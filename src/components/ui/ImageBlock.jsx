export default function ImageBlock({ src, caption }) {
  return (
    <div className="flex flex-col gap-10 xl:gap-15">
      <img 
        src={src} 
        alt={caption}
        loading="lazy"
        decoding="async"
        className="w-full object-cover" 
      />
      <p className="text-center text-body-b7 md:text-body-b6 xl:text-body-b4 text-bw6">
        {caption}
      </p>
    </div>
  );
}