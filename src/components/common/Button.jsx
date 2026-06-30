export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg",

    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",

    outline:
      "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}