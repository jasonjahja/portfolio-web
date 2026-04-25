export default function VideoBlock({ src, caption }) {
  return (
    <div className="flex flex-col gap-10 xl:gap-15">
      <video
          src={src}
          alt={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
      />
      <p className="text-center text-body-b7 xl:text-body-b4 text-bw6">
        {caption}
      </p>
    </div>
  );
}