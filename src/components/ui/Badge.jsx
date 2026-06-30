export default function Badge({
  children,
  color = "primary",
}) {
  const colors = {
    primary: "bg-slate-900 text-white",
    light: "bg-slate-100 text-slate-800",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}