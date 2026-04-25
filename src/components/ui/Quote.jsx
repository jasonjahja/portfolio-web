export default function Quote({ children }) {
  return (
    <div className="rounded-sm border-l-3 xl:border-l-4 border-bw6 pl-15 xl:pl-25 italic text-sans text-body-b6 xl:text-body-b1 flex flex-col gap-10 xl:gap-30">
      {children}
    </div>
  );
}