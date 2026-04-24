import ImageBlock from "../ui/ImageBlock";

export default function DecisionBlock({ title, paragraphs, images }) {
  return (
    <div className="flex flex-col gap-25">
      <div className="flex flex-col gap-15">
        <h3 className="font-sans text-body-h6b">{title}</h3>

        <div className="flex flex-col gap-25">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sans text-body-b1">{p}</p>
          ))}
        </div>
      </div>

      {images?.map((img, i) => (
        <ImageBlock
          key={i}
          src={img.src}
          alt={img.caption}
          caption={img.caption}
        />
      ))}
    </div>
  );
}