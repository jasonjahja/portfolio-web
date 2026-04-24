export default function Meta({ icon, label, value }) {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <div className="flex items-center gap-10">
        <img src={icon} className="h-20" />
        <span className="text-bw7 text-body-b3">{label}</span>
      </div>
      <p className="text-body-b3">{value}</p>
    </div>
  );
}