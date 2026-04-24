export default function ImageBlock({ src, caption }) {
  return (
    <div className="flex flex-col gap-15">
      <img src={src} alt={src} className="w-full object-cover" />
      <p className="text-center text-body-b4 text-bw6">
        {caption}
      </p>
    </div>
  );
}