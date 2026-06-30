export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-2 hover:shadow-xl"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}