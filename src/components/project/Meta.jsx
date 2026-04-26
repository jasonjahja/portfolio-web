export default function Meta({ icon, label, value }) {
  return (
    <div className="flex-1 flex flex-col md:gap-5">
      <div className="flex items-center gap-5 md:gap-10">
        <img src={icon} className="h-[14px] md:h-20" />
        <span className="text-bw7 text-body-b6 md:text-body-b4 xl:text-body-b3">{label}</span>
      </div>
      <p className="text-body-b6 md:text-body-b4 xl:text-body-b3">{value}</p>
    </div>
  );
}