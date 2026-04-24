export default function Quote({ children }) {
  return (
    <div className="rounded-sm border-l-4 border-bw6 pl-25 italic text-sans text-body-b1 flex flex-col gap-30">
      {children}
    </div>
  );
}