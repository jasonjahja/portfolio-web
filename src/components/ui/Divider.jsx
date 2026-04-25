export default function Divider({ type = "horizontal", className = "" }) {
  const base = "bg-bw5";

  const styles = {
    horizontal: "h-px w-full",
    vertical: "w-px",
  };

  return <div className={`${base} ${styles[type]} ${className}`} />;
}